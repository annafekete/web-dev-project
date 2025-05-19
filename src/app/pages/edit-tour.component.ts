import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from '../services/tour.service';
import { Tour } from '../models/tour.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-tour',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './edit-tour.component.html',
  styleUrl: './edit-tour.component.css'
})
export class EditTourComponent implements OnInit {
  tourId = '';
  tour: Partial<Tour> = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService
  ) {}

  ngOnInit() {
    this.tourId = this.route.snapshot.paramMap.get('id') || '';
    // Itt opcionálisan lekérheted az adott túra adatait Firestore-ból
  }

  updateTour() {
    this.tourService.updateTour(this.tourId, this.tour)
      .then(() => {
        alert('Túra frissítve!');
        this.router.navigate(['/tours']);
      })
      .catch(err => alert('Hiba frissítéskor: ' + err.message));
  }
}
