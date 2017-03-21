import { Routes, RouterModule } from '@angular/router';

import { ElementsComponent } from './elements/elements.component';


export const routes: Routes = [
  {
    path: 'forms/elements',
    component: ElementsComponent
  }
];
export const RoutingModule = RouterModule.forChild(routes);
