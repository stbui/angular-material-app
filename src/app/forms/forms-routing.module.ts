import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';

const routers: Routes = [
  {
    path:'',
    component: AdminComponent,
    children: [
      {
        path: 'forms/elements',
        component: ElementsComponent
      },
      {
        path: 'forms/validation',
        component: ValidationComponent
      },
      {
        path: 'forms/ckeditor',
        component: CkeditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routers, {useHash: true}) ],
  exports: [ RouterModule ],
  providers: []
})

export class RoutingModule {
}
