import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { EditorComponent } from './editor/editor.component';

const routers: Routes = [
  {
    path:'forms',
    component: AdminComponent,
    children: [
      {
        path: 'elements',
        component: ElementsComponent
      },
      {
        path: 'validation',
        component: ValidationComponent
      },
      {
        path: 'editor',
        component: EditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routers) ],
  exports: [ RouterModule ],
  providers: []
})

export class RoutingModule {
}
