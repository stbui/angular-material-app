import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';


export const routes: Routes = [
  {
    path: 'chat',
    component: ChatComponent
  }
];
export const RoutingModule = RouterModule.forChild(routes);
