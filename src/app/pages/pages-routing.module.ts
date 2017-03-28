import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

const routers: Routes = [
  {
    path:'',
    component: AdminComponent,
    children: [
      {
        path: 'pages/about',
        component: AboutComponent
      },
      {
        path: 'pages/contact',
        component: ContactComponent
      },
      {
        path: 'pages/services',
        component: ServicesComponent
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
