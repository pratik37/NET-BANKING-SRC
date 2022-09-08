import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './COMPONENT/Customer/customer-home/customer-home.component';

import { LoginComponent } from './COMPONENT/login/login.component';
import { ARegistrationComponent } from './COMPONENT/Registration/a-registration/a-registration.component';
import { BRegistrationComponent } from './COMPONENT/Registration/b-registration/b-registration.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path: "" , component: CustomerHomeComponent},
  {path: "newRegistration", component: ARegistrationComponent},
  {path: "nextPage", component: BRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
