import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  onSubmit() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        alert('Sikeres regisztráció!');
        this.router.navigate(['/login']);
      })
      .catch(err => {
        alert('Hiba: ' + err.message);
      });
  }
}
