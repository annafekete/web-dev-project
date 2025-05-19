import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import {TourService} from '../../services/tour.service';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-add-tour',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './add-tour.component.html',
  styleUrl: './add-tour.component.css'
})
export class AddTourComponent {
  newTour: Tour = {
    id: '',
    title: '',
    description: '',
    difficulty: 'easy',
    duration: 1,
    imageUrl: ''
  };

  constructor(private tourService: TourService) {}

  async onSubmit() {
    try {
      await this.tourService.addTour(this.newTour);
      alert('Túra sikeresen hozzáadva!');
      this.newTour = { id: '', title: '', description: '', difficulty: 'easy', duration: 1, imageUrl: '' };
    } catch (err) {
      console.error(err);
      alert('Hiba a mentés során!');
    }
  }
}
