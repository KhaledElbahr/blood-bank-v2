import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// Services
import { AuthService } from './services/auth.service';
import { LoginAuthGuard } from './Auth/login-auth.guard';
import { CanDeactivateGuard } from './Auth/can-deactivate.guard';
import { DialogService } from './services/dialog.service';
// Shared Modules
import { ConfirmPasswordModule } from './shared/confirm-password/confirm-password.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ConfirmPasswordModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    LoginAuthGuard,
    CanDeactivateGuard,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
