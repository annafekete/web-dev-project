import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tour } from '../../models/tour.model';
import { TourCardComponent } from './tour-card.component';
import { DifficultyLabelPipe } from '../../pipes/difficulty-label.pipe';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trail-list',
  standalone: true,
  imports: [CommonModule, TourCardComponent, DifficultyLabelPipe],
  templateUrl: './trail-list.component.html',
  styleUrl: './trail-list.component.css'
})
export class TrailListComponent implements OnInit {
  tours$: Observable<Tour[]>;

  constructor(private firestore: Firestore) {
    const toursCollection = collection(this.firestore, 'tours');
    this.tours$ = collectionData(toursCollection, { idField: 'id' }) as Observable<Tour[]>;
  }

  ngOnInit(): void {
    console.log('TrailList betöltve');
  }

  ngOnDestroy(): void {
    console.log('TrailList elhagyva');
  }

  onTourSelected(id: string) {
    console.log('Kiválasztott túra ID:', id);
  }
}
