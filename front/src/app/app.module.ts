import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CatalogComponent} from './catalog/catalog.component';
import { FormComponent } from './form/form.component'
import {HeaderComponent} from "./header/header.component";


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    FormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
