import { createFeatureSelector, createSelector } from "@ngrx/store";
import { fromRoles } from '../_reducers';
import { Role } from '../_models/role.model';
import { each } from 'lodash';
import { HttpExtenstionsModel, QueryResultsModel } from 'src/app/core/_base/crud';

export const rolesFeatureKey = 'roles';

const selectRolesState = createFeatureSelector<fromRoles.State>(rolesFeatureKey);

export const selectRoleById = (roleId: string) => createSelector(
  selectRolesState,
  state => state.entities[roleId],
);

export const selectAllRoles = createSelector(
  selectRolesState,
  fromRoles.selectAll,
);

export const selectAllRolesIds = createSelector(
  selectRolesState,
  fromRoles.selectIds,
);

export const allRolesLoaded = createSelector(
  selectRolesState,
  state => state.isAllRolesLoaded,
);

export const selectRolesPageLoading = createSelector(
  selectRolesState,
  state => state.listLoading,
);

export const selectRolesActionLoading = createSelector(
  selectRolesState,
  state => state.actionsloading,
);

export const selectLastCreatedRoleId = createSelector(
  selectRolesState,
  state => state.lastCreatedRoleId,
);

export const selectRolesShowInitWaitingMessage = createSelector(
  selectRolesState,
  state => state.showInitWaitingMessage,
);

export const selectQueryResult = createSelector(
  selectRolesState,
  state => {
    const items: Role[] = [];
    each(state.entities, element => items.push(element));
    const httpExtension = new HttpExtenstionsModel();
    httpExtension.sortArray(
      items, state.lastQuery.sortField,
      state.lastQuery.sortOrder
    );

    return new QueryResultsModel(state.queryResult, state.queryRowsCount);
  },
);



