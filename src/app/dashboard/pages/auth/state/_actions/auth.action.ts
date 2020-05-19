import { createAction, props } from '@ngrx/store';
import { User } from '../_models/user.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  UserRequested = '[Auth/Api] Request User',
  UserLoaded = '[Auth/Api] Load User',
};

export const login = createAction(
  AuthActionTypes.Login,
  props<{ authToken: string }>(),
);

export const logout = createAction(
  AuthActionTypes.Logout,
);

export const userRequested = createAction(
  AuthActionTypes.UserRequested,
);

export const userLoaded = createAction(
  AuthActionTypes.UserLoaded,
  props<{ user: User }>(),
);