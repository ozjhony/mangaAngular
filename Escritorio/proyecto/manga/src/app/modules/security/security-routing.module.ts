import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ChangePasswordComponent} from './change-password/change-password.component';

const routes: Routes = [
  {
   path: 'login',
   component: LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'reset',
    component:ResetPasswordComponent
  },
  {
    path:'change',
    component:ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
