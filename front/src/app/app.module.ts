import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CatalogComponent} from './catalog/catalog.component';
import { SignUpComponent } from './signUp/signUp.component';
import {SignInComponent} from './signIn/signIn.component';
import {HeaderComponent} from './header/header.component';
import {IndexComponent} from './index/index.module';
import {FooterComponent} from './footer/footer.module';

import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true// if false, only one interceptor is avaiable
};
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
