import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './COMPONENT/Customer/customer-home/customer-home.component';

import { LoginComponent } from './COMPONENT/login/login.component';
import { ARegistrationComponent } from './COMPONENT/Registration/a-registration/a-registration.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path: "" , component: CustomerHomeComponent},
  {path: "newRegistration", component: ARegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
