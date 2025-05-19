import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  orderBy,
  limit, addDoc,
  deleteDoc, doc, updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tour } from '../models/tour.model';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  constructor(private firestore: Firestore) {}

  private get toursRef() {
    return collection(this.firestore, 'tours');
  }

  getTours(): Observable<Tour[]> {
    return collectionData(this.toursRef, { idField: 'id' }) as Observable<Tour[]>;
  }

  getEasyTours(): Observable<Tour[]> {
    return collectionData(
      query(this.toursRef, where('difficulty', '==', 'easy')),
      { idField: 'id' }
    ) as Observable<Tour[]>;
  }

  getSortedByDuration(): Observable<Tour[]> {
    return collectionData(
      query(this.toursRef, orderBy('duration')),
      { idField: 'id' }
    ) as Observable<Tour[]>;
  }

  getLimitedTours(): Observable<Tour[]> {
    return collectionData(
      query(this.toursRef, limit(3)),
      { idField: 'id' }
    ) as Observable<Tour[]>;
  }

  getHardToursOrdered(): Observable<Tour[]> {
    return collectionData(
      query(this.toursRef, where('difficulty', '==', 'hard'), orderBy('duration')),
      { idField: 'id' }
    ) as Observable<Tour[]>;
  }

  addTour(tour: Tour): Promise<any> {
    return addDoc(this.toursRef, tour);
  }

  deleteTour(id: string) {
    const docRef = doc(this.firestore, `tours/${id}`);
    return deleteDoc(docRef);
  }

  updateTour(id: string, tour: Partial<Tour>) {
    const docRef = doc(this.firestore, `tours/${id}`);
    return updateDoc(docRef, tour);
  }
}
