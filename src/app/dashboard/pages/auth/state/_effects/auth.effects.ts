import { Injectable } from "@angular/core";
import { Actions, ofType } from '@ngrx/effects';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Store, Action } from '@ngrx/store';
import { createEffect } from '@ngrx/effects';
import { AuthActions } from '../_actions';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable, defer, of } from 'rxjs';
import { AppState } from 'src/app/core/reducers';

@Injectable()
export class AuthEffects {

  private returnUrl: string;

  constructor(
    private actions$: Actions,
    private router: Router,
    private auth: AuthService,
    private store: Store<AppState>,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
  }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      tap(({ authToken }) => {
        localStorage.setItem(environment.authTokenKey, authToken);
        this.store.dispatch(AuthActions.userRequested());
      }),
    ),
    { dispatch: false },
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        localStorage.removeItem(environment.authTokenKey);
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.returnUrl } });
        document.location.reload();
      }),
    ),
    { dispatch: false },
  );

  init$: Observable<Action> = defer(() => {
    const userToken = localStorage.getItem(environment.authTokenKey);
    let observaleResult = of({ type: 'NO_ACTION' });
    if (userToken) {
      observaleResult = of (AuthActions.login({ authToken: userToken }));
    }

    return observaleResult;
  });
}