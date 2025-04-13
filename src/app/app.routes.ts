import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrailListComponent } from './pages/trail-list/trail-list.component';
import { BookingComponent } from './pages/booking/booking.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tours', component: TrailListComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'login', component: LoginComponent }
];
