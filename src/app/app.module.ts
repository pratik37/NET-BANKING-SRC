import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './COMPONENT/login/login.component';
import { CustomerHomeComponent } from './COMPONENT/Customer/customer-home/customer-home.component';
import { LoginMenuComponent } from './COMPONENT/login-menu/login-menu.component';
import { ARegistrationComponent } from './COMPONENT/Registration/a-registration/a-registration.component';
import { BRegistrationComponent } from './COMPONENT/Registration/b-registration/b-registration.component';
import { CRegistrationComponent } from './COMPONENT/Registration/c-registration/c-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginMenuComponent,
    CustomerHomeComponent,
    ARegistrationComponent,
    BRegistrationComponent,
    CRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
