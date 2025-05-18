import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut, onAuthStateChanged } from '@angular/fire/auth';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [MatToolbarModule, MatButtonModule, NgIf, RouterModule],
})

export class MenuComponent {
  isLoggedIn = false;

  constructor(private auth: Auth, private router: Router) {
    // Figyeljük a bejelentkezett felhasználó állapotát
    onAuthStateChanged(this.auth, user => {
      this.isLoggedIn = !!user;
    });
  }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/']);
    });
  }
}
