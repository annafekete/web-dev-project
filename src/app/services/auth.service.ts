import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    onAuthStateChanged(this.auth, user => {
      this.currentUserSubject.next(user);
    });
  }

  isAdmin(): boolean {
    const email = this.auth.currentUser?.email;
    return email === 'admin@example.com'; // Itt cseréld a saját admin emailre
  }
}
