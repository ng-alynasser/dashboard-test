import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import { fromAuth } from './state/_reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/_effects/auth.effects';
import { TranslateModule } from '@ngx-translate/core';
import { InterceptService } from 'src/app/core/_base/crud';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AuthNoticeComponent } from './components/auth-notice/auth-notice.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './state/_guards/auth.guard';
import { AuthNoticeService } from './services/auth-notice.service';
import { AuthComponent } from './auth.component';

const NG_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  AuthRoutingModule,
];

const MAT_MODULES = [
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
];

const NGRX_MODULES = [
  StoreModule.forFeature('auth', fromAuth.reducer),
  EffectsModule.forFeature([AuthEffects]),
];

const MISC_MODULES = [
  TranslateModule,
];

const COMPONENTS = [
  AuthComponent,
  LoginComponent,
  ForgetPasswordComponent,
  AuthNoticeComponent,
];


@NgModule({
  imports: [
    ...NG_MODULES,
    ...MAT_MODULES,
    ...NGRX_MODULES,
    ...MISC_MODULES,
  ],
  providers: [
    AuthNoticeService,
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true,
    },
  ],
  exports: [
    AuthComponent,
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class AuthModule {
  static fooRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard,
      ]
    }
  }
}