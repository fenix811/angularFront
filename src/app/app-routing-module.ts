import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationComponent } from './administration/administration.component';

import { SiteComponent } from './site/site.component';
import { AuthGuard } from './guards/authGuard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
      path: '',
      component: SiteComponent,
  },
  {
      path: 'administration', canActivate: [AuthGuard],
      component: AdministrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
