import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tour } from '../../models/tour.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { TourService } from '../../services/tour.service';
import {RouterLink} from '@angular/router'; // <== új

@Component({
  selector: 'app-tour-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './tour-card.component.html',
  styleUrl: './tour-card.component.css'
})
export class TourCardComponent {
  @Input() tour!: Tour;
  @Output() selectTour = new EventEmitter<string>();
  isAdmin = false;

  constructor(private auth: Auth, private tourService: TourService) {
    onAuthStateChanged(this.auth, user => {
      this.isAdmin = !!user && user.email === 'admin@tripapp.com';
    });
  }

  onSelect() {
    this.selectTour.emit(this.tour.id);
  }

  deleteTour() {
    if (confirm(`Biztosan törölni szeretnéd a(z) "${this.tour.title}" túrát?`)) {
      this.tourService.deleteTour(this.tour.id)
        .then(() => alert('Túra sikeresen törölve!'))
        .catch(err => alert('Hiba a törlés során: ' + err.message));
    }
  }
}
