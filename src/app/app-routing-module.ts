import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SiteComponent} from './site/site.component';
import {AdministrationComponent} from './administration/administration.component';

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
  exports: [RouterModule]
})
export class AppRoutingModule { }
