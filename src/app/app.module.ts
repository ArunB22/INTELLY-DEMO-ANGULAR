import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './ui/components/login/login.component';
import {AppRoutingModule} from './app-routing/app-routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {MatDialogModule, MatSnackBarModule} from '@angular/material';
import {SharedModule} from './shared/shared.module';
import { RegistrationComponent } from './ui/components/registration/registration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BoardsComponent } from './ui/components/landing/landing.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap';
import {MessageDialogComponent} from './ui/dialogs/message-dialog/message-dialog.component';
import {SessionExpiredHandlerComponent} from './ui/components/session-expired-handler/session-expired-handler.component';
import {BadApiRequestComponent} from './ui/components/bad-api-request/bad-api-request.component';
import {NotFound404Component} from './ui/components/not-found-404/not-found-404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    BoardsComponent,
    MessageDialogComponent,
    SessionExpiredHandlerComponent,
    BadApiRequestComponent,
    NotFound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatSnackBarModule,
    SharedModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgbModule.forRoot(),
    MatDialogModule
  ],
  entryComponents: [
    MessageDialogComponent,
  ],
  providers: [{ provide: 'LOCALSTORAGE', useFactory: getLocalStorage }, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getLocalStorage() {
  return (typeof window !== 'undefined') ? window.localStorage : null;
}
