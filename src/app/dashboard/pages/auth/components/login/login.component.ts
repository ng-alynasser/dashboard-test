import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { tap, takeUntil, finalize } from 'rxjs/operators';
import { AuthActions } from '../../state/_actions';
import { AuthNoticeService } from '../../services/auth-notice.service';
import { AppState } from 'src/app/core/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  loading = false;
  isLoggedIn$: Observable<boolean>;
  errors: any = [];

  private unsubscribe: Subject<any>;
  private returnUrl: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private authNoticeService: AuthNoticeService,
    private translate: TranslateService,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
  ) {
    this.unsubscribe = new Subject();
  }

  ngOnInit(): void {
    this.initLoginForm();
    this.route.queryParamMap.subscribe(params => {
      this.returnUrl = params.get('returnUrl') || '/';
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.loading = false;
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  submit(): void {
    const controls = this.loginForm.controls;

    if (this.loginForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()  
      );
    }

    this.loading = true;

    const authData = {
      email : controls.email.value,
      password: controls.password.value,
    };

    this.auth
      .login(authData.email, authData.password)
      .pipe(
        tap(user => {
          if (user) {
            this.store.dispatch(AuthActions.login({ authToken: user.token }));
            this.router.navigateByUrl(this.returnUrl);
          } else {
            this.authNoticeService.setNotice(this.translate.instant('AUTH.VALIDATION.INVALID_LOGIN'), 'danger');
          }
        }),
        takeUntil(this.unsubscribe),
        finalize(() => {
          this.loading =false;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];

    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);

    return result;
  }
}