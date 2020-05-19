import { Action, createAction, props } from '@ngrx/store';
import { User } from '../_models/user.model';

export enum AuthActionTypes {
    Login = '[Login] Action',
    Logout = '[Logout] Action',
    Register = '[Register] Action',
    UserRequested = '[Request User] Action',
    UserLoaded = '[Load User] Auth API'
}

// New Action Way

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

// Old class-based action creators

export class Login implements Action {
    readonly type = AuthActionTypes.Login;
    constructor(public payload: { authToken: string }) { }
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;
}

export class Register implements Action {
    readonly type = AuthActionTypes.Register;
    constructor(public payload: { authToken: string }) { }
}


export class UserRequested implements Action {
    readonly type = AuthActionTypes.UserRequested;
}

export class UserLoaded implements Action {
    readonly type = AuthActionTypes.UserLoaded;
    constructor(public payload: { user: User }) { }
}

export type AuthActions = Login | Logout | Register | UserRequested | UserLoaded;
