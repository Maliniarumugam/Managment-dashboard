import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const loadUser = createAction('[User] Load User');

export const updateUser = createAction(
  '[User] Update User',
  props<{ user: User }>()
);
