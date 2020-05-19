import { createAction, props } from '@ngrx/store';
import { Permission } from '../_models/permission.model';

export const allPermisionsRequested = createAction(
  '[Init] All Permissions Requested',
  );
  
export const allPermissionsLoaded = createAction(
  '[Init] All Permissions Loaded',
  props<{ permissions: Permission[] }>(),
);