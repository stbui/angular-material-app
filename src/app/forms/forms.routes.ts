import { Routes, RouterModule } from '@angular/router';

import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';


export const routes: Routes = [
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
];
export const RoutingModule = RouterModule.forChild(routes);
