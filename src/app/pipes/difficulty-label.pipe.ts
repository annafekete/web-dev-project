import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyLabel',
  standalone: true
})
export class DifficultyLabelPipe implements PipeTransform {
  transform(value: 'easy' | 'medium' | 'hard'): string {
    switch (value) {
      case 'easy': return '🌿 Könnyű';
      case 'medium': return '🏞️ Közepes';
      case 'hard': return '⛰️ Nehéz';
      default: return value;
    }
  }
}
