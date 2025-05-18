import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Auth, updateProfile, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css',
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class ProfileEditComponent {
  displayName = '';
  user: User | null = null;

  constructor(private auth: Auth, private router: Router) {
    this.user = getAuth().currentUser;
    if (this.user?.displayName) {
      this.displayName = this.user.displayName;
    }
  }

  onSubmit() {
    if (this.user) {
      updateProfile(this.user, { displayName: this.displayName })
        .then(() => {
          alert('Profil frissítve!');
          this.router.navigate(['/']);
        })
        .catch((err) => alert('Hiba: ' + err.message));
    }
  }
}
