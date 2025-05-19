import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tour } from '../../models/tour.model';
import { TourCardComponent } from './tour-card.component';
import { DifficultyLabelPipe } from '../../pipes/difficulty-label.pipe';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {TourService} from '../../services/tour.service';

@Component({
  selector: 'app-trail-list',
  standalone: true,
  imports: [CommonModule, TourCardComponent, DifficultyLabelPipe],
  templateUrl: './trail-list.component.html',
  styleUrl: './trail-list.component.css'
})
export class TrailListComponent implements OnInit {
  tours$!: Observable<Tour[]>;

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
    this.tours$ = this.tourService.getTours();
  }

  ngOnDestroy(): void {
    console.log('TrailList elhagyva');
  }

  onTourSelected(id: string) {
    console.log('Kiválasztott túra ID:', id);
  }

  loadAll() {
    this.tours$ = this.tourService.getTours();
  }

  loadEasy() {
    this.tours$ = this.tourService.getEasyTours();
  }

  loadSorted() {
    this.tours$ = this.tourService.getSortedByDuration();
  }

  loadLimited() {
    this.tours$ = this.tourService.getLimitedTours();
  }

  loadHardOrdered() {
    this.tours$ = this.tourService.getHardToursOrdered();
  }

}
