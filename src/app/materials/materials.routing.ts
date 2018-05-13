import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastComponent } from './toast/toast.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { TabsComponent } from './tabs/tabs.component';
import { IconComponent } from './icon/icon.component';

import { PaginationComponent } from './pagination/pagination.component';
import { AmapComponent } from './amap/amap.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { PopoverComponent } from './popover/popover.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationComponent } from './notification/notification.component';
import { ChatWidgetComponent } from './chat-widget/chat-widget.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonsComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'toast',
    component: ToastComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'tooltips',
    component: TooltipsComponent
  },
  {
    path: 'dialogs',
    component: DialogsComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'icon',
    component: IconComponent
  },
  {
    path: 'pagination',
    component: PaginationComponent
  },
  {
    path: 'amap',
    component: AmapComponent
  },
  {
    path: 'date-picker',
    component: DatePickerComponent
  },
  {
    path: 'markdown',
    component: MarkdownComponent
  },
  {
    path: 'popover',
    component: PopoverComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'chat-widget',
    component: ChatWidgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MaterialsRoutingModule {
}
