import { createReducer, on } from '@ngrx/store';
import { User } from './user.model';
import { loadUser, updateUser } from './user.actions';

export const initialState: User = {
  name: 'Malini',
  email: 'malinisangeetha@example.com',
  profilePicture: 'https://via.placeholder.com/150'
};

const _userReducer = createReducer(
  initialState,
  on(loadUser, state => state),
  on(updateUser, (state, { user }) => ({ ...state, ...user }))
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
