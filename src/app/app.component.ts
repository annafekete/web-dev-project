import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TrailDetailsComponent } from './pages/trail-details/trail-details.component';
import { TrailListComponent } from './pages/trail-list/trail-list.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HomeComponent,
    BookingComponent,
    LoginComponent,
    SigninComponent,
    ProfileComponent,
    TrailDetailsComponent,
    TrailListComponent,
    MenuComponent,
    NgIf
  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trip_booking';

  page = 'menu'
}
