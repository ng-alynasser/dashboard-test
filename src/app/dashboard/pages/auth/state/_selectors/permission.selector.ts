import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromPermissions } from '../_reducers';

export const permissionFeatureKey = 'permissions'

export const selectPermissionsState = createFeatureSelector<fromPermissions.State>(permissionFeatureKey);

export const selectPermissionById = (permissionId: number) => createSelector(
  selectPermissionsState,
  state => state.entities[permissionId],
);

export const selectAllPermissions = createSelector(
  selectPermissionsState,
  fromPermissions.selectAll,
);

export const selectAllPermisionsIds = createSelector(
  selectPermissionsState,
  fromPermissions.selectIds,
);

export const allPermissionsLoaded = createSelector(
  selectPermissionsState,
  state => state._isAllPermissionsLoaded,
);