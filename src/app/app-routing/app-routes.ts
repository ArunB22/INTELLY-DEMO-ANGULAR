import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../ui/components/login/login.component';
import {RegistrationComponent} from '../ui/components/registration/registration.component';
import {BoardsComponent} from '../ui/components/landing/landing.component';
import {NotFound404Component} from '../ui/components/not-found-404/not-found-404.component';

export const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: '*', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'landing', component: BoardsComponent},
  {path: 'error-redirect', component: NotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
