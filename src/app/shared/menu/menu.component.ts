import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isLoggedIn = false;

  constructor() {
    // Ellenőrizzük localStorage-ből (csak oldalbetöltéskor)
    this.isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  }
}
