import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadComponent } from './lead/lead.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path: '', component: LeadComponent},
  {path: 'lead', component: LeadComponent},
  {path: 'customer', component: CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule {

}
