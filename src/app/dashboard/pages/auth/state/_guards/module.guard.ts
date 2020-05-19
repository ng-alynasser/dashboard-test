import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { AuthSelectors } from '../_selectors';
import { map, tap } from 'rxjs/operators';
import { Permission } from '../_models/permission.model';
import { find } from 'lodash';
import { AppState } from 'src/app/core/reducers';

@Injectable()
export class ModuleGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) { 

    const moduleName = route.data.moduleName as string;
    if (!moduleName) {
      return of(false);
    }

    return this.store
      .pipe(
        select(AuthSelectors.currentUserPermissions),
        map((permissions: Permission[]) => {
          const perm = find(permissions, (elem: Permission) => {
            return elem.title.toLocaleLowerCase() === moduleName.toLocaleLowerCase();
          });

          return perm ? true : false;
        }),
        tap(hasAccess => {
          if (!hasAccess) {
            this.router.navigateByUrl('/error/403');
          }
        }),
      );
  }
}