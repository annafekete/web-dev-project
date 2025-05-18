import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

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
  newTour = {
    title: '',
    description: '',
    difficulty: 'easy',
    duration: 1,
    imageUrl: ''
  };

  constructor(private firestore: Firestore) {}

  async onSubmit() {
    try {
      const toursRef = collection(this.firestore, 'tours');
      await addDoc(toursRef, this.newTour);
      alert('Túra sikeresen hozzáadva!');
      this.newTour = {
        title: '',
        description: '',
        difficulty: 'easy',
        duration: 1,
        imageUrl: ''
      };
    } catch (error) {
      console.error('Hiba túra mentése közben:', error);
      alert('Hiba történt a mentés során.');
    }
  }
}
