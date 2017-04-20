import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CollectionComponent } from './collection/collection.component';
import { UserComponent } from './user/user.component';

const routers: Routes = [
  {
    path:'',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      },
      {
        path: 'pages/about',
        component: AboutComponent
      },
      {
        path: 'pages/contact',
        component: ContactComponent
      },
      {
        path: 'pages/collection',
        component: CollectionComponent
      },
      {
        path: 'pages/services',
        component: ServicesComponent
      },
      {
        path: 'pages/user',
        component: UserComponent
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
