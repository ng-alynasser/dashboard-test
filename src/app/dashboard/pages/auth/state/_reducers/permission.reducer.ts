import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Permission } from '../_models/permission.model';
import { createReducer, on, Action } from '@ngrx/store';
import { PermissionActions } from '../_actions';

export interface State extends EntityState<Permission> {
  _isAllPermissionsLoaded: false;
}

export const adapter: EntityAdapter<Permission> = createEntityAdapter<Permission>();

export const initialPemissionState: State = adapter.getInitialState({
  _isAllPermissionsLoaded: false,
});

const permissionReducer = createReducer(
  initialPemissionState,
  on(
    PermissionActions.allPermisionsRequested,
    state => ({ ...state, _isAllPermissionsLoaded: false }),
  ),

  on(
    PermissionActions.allPermissionsLoaded,
    (state, { permissions }) => {
      return adapter.addAll(
        permissions,
        { ...state, _isAllPermissionsLoaded: true },
      );
    },
  ),
);

export function reducer(state: State, action: Action) {
  return permissionReducer(state, action);
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = adapter.getSelectors();