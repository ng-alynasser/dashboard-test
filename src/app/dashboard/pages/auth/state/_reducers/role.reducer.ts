import { Role } from '../_models/role.model';
import { QueryParamsModel } from 'src/app/core/_base/crud';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { RoleActions } from '../_actions';

export interface State extends EntityState<Role> {
  isAllRolesLoaded: boolean;
  queryRowsCount: number;
  queryResult: Role[];
  lastCreatedRoleId: string;
  listLoading: boolean;
  actionsloading: boolean;
  lastQuery: QueryParamsModel;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Role> = createEntityAdapter<Role>();

export const initialState: State = adapter.getInitialState({
  isAllRolesLoaded: false,
  queryRowsCount: 0,
  queryResult: [],
  lastCreatedRoleId: undefined,
  listLoading: false,
  actionsloading: false,
  lastQuery: new QueryParamsModel({}),
  showInitWaitingMessage: true
});

const rolesReducer = createReducer(
  initialState,
  on(
    RoleActions.rolesPageToggleLoading,
    (state, { isLoading }) => ({
      ...state,
      listLoading: isLoading,
    }),
  ),

  on(
    RoleActions.rolesActionToggleLoading,
    (state, { isLoading }) => ({
      ...state,
      actionsloading: isLoading,
    }),
  ),

  on(
    RoleActions.roleOnServerCreated,
    state => ({ ...state }),
  ),

  on(
    RoleActions.roleCreated,
    (state, { role }) => ({
      ...state,
      lastCreatedRoleId: role.id,
    }),
  ),

  on(
    RoleActions.roleUpdated,
    (state, { partialRole, role }) => {
      return adapter.updateOne(partialRole, state);
    },
  ),

  on(
    RoleActions.roleDeleted,
    (state, { id }) => {
      return adapter.removeOne(id, state);
    },
  ),

  on(
    RoleActions.allRolesLoaded,
    (state, { roles }) => {
      return adapter.addAll(roles, { ...state, isAllRolesLoaded: true });
    },
  ),

  on(
    RoleActions.rolePageCancelled,
    state => ({
      ...state,
      listLoading: false,
      queryRowsCount: 0,
      queryResult: [],
      lastQuery: new QueryParamsModel({}),
    }),
  ),

  on(
    RoleActions.rolesPageLoaded,
    (state, { roles, totalCount, page }) => {
      return adapter.addAll(roles, {
        ...state,
        listLoading: false,
        queryRowsCount: totalCount,
        queryResult: roles,
        lastQuery: page,
        showInitWaitingMessage: false,
      });
    },
  ),
);

export function reducer(state: State, action: Action) {
  return rolesReducer(state, action);
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = adapter.getSelectors();
