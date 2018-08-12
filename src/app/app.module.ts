import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing-module';
import { AdministrationComponent } from './administration-component/administration-component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    AdministrationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
