import { User } from '../_models/user.model';
import { createReducer, on, Action } from '@ngrx/store';
import { AuthActions } from '../_actions';

export interface State {
  loggedIn: boolean;
  authToken: string;
  user: User;
  isUserLoaded: boolean;
}

export const initialState: State = {
  loggedIn: false,
  authToken: undefined,
  user: undefined,
  isUserLoaded: false,
};

const authReducer = createReducer(
  initialState,
  on(
    AuthActions.login,
    (state, { authToken }) => ({
      loggedIn: true,
      authToken,
      user: undefined,
      isUserLoaded: false,
    }),
  ),

  on(AuthActions.logout, () => initialState),

  on(
    AuthActions.userLoaded,
    (state, { user }) => ({
      ...state,
      user,
      isUserLoaded: true,
    }),
  ),

);

export function reducer(state: State, action: Action) {
  return authReducer(state, action);
}
