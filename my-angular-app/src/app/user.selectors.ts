import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from './user.model';

export const selectUser = createFeatureSelector<User>('user');

export const selectUserName = createSelector(
  selectUser,
  (state: User) => state.name
);

export const selectUserEmail = createSelector(
  selectUser,
  (state: User) => state.email
);

export const selectUserProfilePicture = createSelector(
  selectUser,
  (state: User) => state.profilePicture
);
