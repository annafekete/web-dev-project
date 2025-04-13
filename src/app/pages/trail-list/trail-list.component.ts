import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tour } from '../../models/tour.model';
import { TourCardComponent } from './tour-card.component';
import { DifficultyLabelPipe } from '../../pipes/difficulty-label.pipe';

@Component({
  selector: 'app-trail-list',
  standalone: true,
  imports: [CommonModule, TourCardComponent, DifficultyLabelPipe],
  templateUrl: './trail-list.component.html',
  styleUrl: './trail-list.component.css'
})
export class TrailListComponent {
  tours: Tour[] = [
    {
      id: '1',
      title: 'Kékestető Túra',
      difficulty: 'medium',
      duration: 4,
      description: 'Gyönyörű erdei útvonal a Kékestetőre.',
      imageUrl: 'https://source.unsplash.com/400x200/?mountain'
    },
    {
      id: '2',
      title: 'Rám-szakadék',
      difficulty: 'hard',
      duration: 2,
      description: 'Izgalmas, vadregényes szurdoktúra.',
      imageUrl: 'https://source.unsplash.com/400x200/?canyon'
    },
    {
      id: '3',
      title: 'Börzsöny Kör',
      difficulty: 'easy',
      duration: 5,
      description: 'Körút a Börzsöny hegységben, változatos terepen.',
      imageUrl: 'https://source.unsplash.com/400x200/?forest'
    },
    // Másold le és variáld még 6-szor:
    {
      id: '4',
      title: 'Mátrai Gerinctúra',
      difficulty: 'medium',
      duration: 6,
      description: 'Gerinctúra lenyűgöző panorámával.',
      imageUrl: 'https://source.unsplash.com/400x200/?landscape'
    },
    {
      id: '5',
      title: 'Duna-parti Séta',
      difficulty: 'easy',
      duration: 2,
      description: 'Könnyed séta a Duna mentén.',
      imageUrl: 'https://source.unsplash.com/400x200/?river'
    },
    {
      id: '6',
      title: 'Zempléni Kilátó Túra',
      difficulty: 'hard',
      duration: 3,
      description: 'Túra a kilátópontok mentén a Zemplénben.',
      imageUrl: 'https://source.unsplash.com/400x200/?hiking'
    },
    {
      id: '7',
      title: 'Bakony Barangolás',
      difficulty: 'medium',
      duration: 5,
      description: 'Kalandozás a Bakony vadregényes tájain.',
      imageUrl: 'https://source.unsplash.com/400x200/?nature'
    },
    {
      id: '8',
      title: 'Tisza-tavi Madárles',
      difficulty: 'easy',
      duration: 3,
      description: 'Túra a természet és madarak nyomában.',
      imageUrl: 'https://source.unsplash.com/400x200/?birds'
    },
    {
      id: '9',
      title: 'Pilisi Kalandtúra',
      difficulty: 'hard',
      duration: 6,
      description: 'Technikás ösvények, látványos sziklák között.',
      imageUrl: 'https://source.unsplash.com/400x200/?adventure'
    }
  ];

  onTourSelected(id: string) {
    console.log('Kiválasztott túra ID:', id);
    // Itt lehetne navigálni a részletekhez
  }
}
