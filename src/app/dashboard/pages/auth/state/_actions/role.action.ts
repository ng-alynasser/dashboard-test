import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Role } from '../_models/role.model';
import { QueryParamsModel } from 'src/app/core/_base/crud';

export enum RoleActionTypes {
  AllRolesRequested = '[Roles Home Page] All Roles Requested',
  AllRolesLoaded = '[Roles API] All Roles Loaded',
  RoleOnServerCreated = '[Edit Role Dialog] Role On Server Created',
  RoleCreated = '[Edit Roles Dialog] Roles Created',
  RoleUpdated = '[Edit Role Dialog] Role Updated',
  RoleDeleted = '[Roles List Page] Role Deleted',
  RolesPageRequested = '[Roles List Page] Roles Page Requested',
  RolesPageLoaded = '[Roles API] Roles Page Loaded',
  RolesPageCancelled = '[Roles API] Roles Page Cancelled',
  RolesPageToggleLoading = '[Roles page] Roles Page Toggle Loading',
  RolesActionToggleLoading = '[Roles] Roles Action Toggle Loading'
}

export const roleOnServerCreated = createAction(
  RoleActionTypes.RoleOnServerCreated,
  props<{ role: Role }>(),
);

export const roleCreated = createAction(
  RoleActionTypes.RoleCreated,
  props<{ role: Role }>(),
);

export const roleUpdated = createAction(
  RoleActionTypes.RoleUpdated,
  props<{ partialRole: Update<Role> , role: Role }>(),
);

export const roleDeleted = createAction(
  RoleActionTypes.RoleDeleted,
  props<{ id: string }>(),
);

export const rolesPageRequested = createAction(
  RoleActionTypes.RolesPageRequested,
  props<{ page: QueryParamsModel }>(),
);

export const rolesPageLoaded = createAction(
  RoleActionTypes.RolesPageLoaded,
  props<{ roles: Role[], totalCount: number, page: QueryParamsModel }>(),
);

export const rolePageCancelled = createAction(RoleActionTypes.RolesPageCancelled);

export const allRolesRequested = createAction(RoleActionTypes.AllRolesRequested);

export const allRolesLoaded = createAction(
  RoleActionTypes.AllRolesLoaded,
  props<{ roles: Role[] }>(),
);

export const rolesPageToggleLoading = createAction(
  RoleActionTypes.RolesPageToggleLoading,
  props<{ isLoading: boolean }>(),
);

export const rolesActionToggleLoading = createAction(
  RoleActionTypes.RolesActionToggleLoading,
  props<{ isLoading: boolean }>(),
);

