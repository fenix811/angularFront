import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AdministrationComponent} from './administration-component/administration-component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
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
