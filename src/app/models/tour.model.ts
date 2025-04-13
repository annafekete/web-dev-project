export interface Tour {
    id: string;
    title: string;
    description: string;
    duration: number; // hours
    difficulty: 'easy' | 'medium' | 'hard';
    imageUrl: string;
  }
  