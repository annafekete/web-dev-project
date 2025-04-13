import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tour } from '../../models/tour.model';
import { DifficultyLabelPipe } from '../../pipes/difficulty-label.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-tour-card',
  standalone: true,
  imports: [ CommonModule, DifficultyLabelPipe, MatCardModule, MatButtonModule, MatIconModule ],
  templateUrl: './tour-card.component.html',
  styleUrl: './tour-card.component.css'
})
export class TourCardComponent {
  @Input() tour!: Tour;
  @Output() selectTour = new EventEmitter<string>();

  onSelect() {
    this.selectTour.emit(this.tour.id);
  }
}
