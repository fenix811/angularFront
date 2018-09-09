import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationComponent } from './administration/administration.component';

import { SiteComponent } from './site/site.component';

const routes: Routes = [
  {
      path: '',
      component: SiteComponent,
  },
  {
      path: 'administration',
      component: AdministrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
