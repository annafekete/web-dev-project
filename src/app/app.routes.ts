import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrailListComponent } from './pages/trail-list/trail-list.component';
import { BookingComponent } from './pages/booking/booking.component';
import { LoginComponent } from './pages/login/login.component';
import { AddTourComponent } from './pages/add-tour/add-tour.component';
import { authGuard } from './guards/auth.guard';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileEditComponent } from './pages/profile-edit.component';
import { EditTourComponent } from './pages/edit-tour.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tours', component: TrailListComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add-tour', component: AddTourComponent, canActivate: [authGuard] },
  { path: 'profile-edit', component: ProfileEditComponent },
  { path: 'edit-tour/:id', component: EditTourComponent, canActivate: [authGuard] }
];
