import { createSelector } from '@ngrx/store';
import { fromAuth } from '../_reducers';
import { selectAllPermissions } from './permission.selector';
import { Permission } from '../_models/permission.model';
import { each, find, some } from 'lodash';

const selectAuthState = (state: fromAuth.State) => state;

export const isLoggedIn = createSelector(
  selectAuthState,
  state => state.loggedIn,
);

export const isLoggedOut = createSelector(
  selectAuthState,
  state => !state.loggedIn,
);

export const currentAuthToken = createSelector(
  selectAuthState,
  state => state.authToken,
);

export const isUserLoaded = createSelector(
  selectAuthState,
  state => state.isUserLoaded,
);

export const currentUser = createSelector(
  selectAuthState,
  state => state.user,
);

export const currentUserRoles = createSelector(
  currentUser,
  user => {
    if (!user) {
      return [];
    }

    return user.role.permissions;
  }
);

export const checkHasUserPermission = (permissionName: string) => createSelector(
  currentUserRoles,
  (permissions: string[]) => {
    return permissions.some(permission => permission === permissionName);
  },
);

export const currentUserPermissions = createSelector(
  currentUserRoles,
  selectAllPermissions,
  (userPemissions: string[], allPermissions: Permission[]) => {
    const result: Permission[] = [];
    each(userPemissions, (permission: string) => {
      const userPermission = find(allPermissions, elem => elem.name === permission);
      if (userPermission) {
        result.push(userPermission);
      }
    });

    return result;
  }
)
