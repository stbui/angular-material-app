import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { ToastComponent } from './toast/toast.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { TabsComponent } from './tabs/tabs.component'
import { PaginationComponent } from './pagination/pagination.component'

const routers: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'materials/toast',
        component: ToastComponent
      },
      {
        path: 'materials/buttons',
        component: ButtonsComponent
      },
      {
        path: 'materials/cards',
        component: CardsComponent
      },
      {
        path: 'materials/tooltips',
        component: TooltipsComponent
      },
      {
        path: 'materials/dialogs',
        component: DialogsComponent
      },
      {
        path: 'materials/lists',
        component: ListsComponent
      },
      {
        path: 'materials/menu',
        component: MenuComponent
      },
      {
        path: 'materials/slider',
        component: SliderComponent
      },
      {
        path: 'materials/tabs',
        component: TabsComponent
      },
      {
        path: 'materials/pagination',
        component: PaginationComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routers, {useHash: true})],
  exports: [RouterModule],
  providers: []
})

export class RoutingModule {
}
