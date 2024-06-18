import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { updateUser } from '../user.actions';
import { selectUser } from '../user.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user.profile.component.html',
  styleUrls: ['./user.profile.component.scss']
})
export class UserProfileComponent {
  user$: Observable<User>;

  name: string = '';
  email: string = '';
  profilePicture: string = '';

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe(user => {
      this.name = user.name;
      this.email = user.email;
      this.profilePicture = user.profilePicture;
    });
  }

  onSave() {
    this.store.dispatch(updateUser({ user: { name: this.name, email: this.email, profilePicture: this.profilePicture } }));
  }
}
