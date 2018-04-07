import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MaterialsRoutingModule } from './materials.routing';
import { ToastComponent } from './toast/toast.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { TabsComponent } from './tabs/tabs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AmapComponent } from './amap/amap.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { PopoverComponent } from './popover/popover.component';
import { CalendarComponent } from './calendar/calendar.component';

import {
  NotificaitonModule,
  DatePickerModule,
  AmapModule,
  ButtonModule,
  FileUploadModule,
  PaginationModule,
  PopoverModule,
} from '../component';

import { CalendarModule } from 'angular-calendar';
import { IconComponent } from './icon/icon.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialsRoutingModule,
    CalendarModule.forRoot(),
    NotificaitonModule,
    AmapModule.forRoot({apiKey: '5ca4be36897408ccfacadf90df1c5f91'}),
    DatePickerModule,
    ButtonModule,
    FileUploadModule,
    PaginationModule,
    PopoverModule
  ],
  declarations: [
    ToastComponent,
    ButtonsComponent,
    CardsComponent,
    TooltipsComponent,
    DialogsComponent,
    ListsComponent,
    MenuComponent,
    SliderComponent,
    TabsComponent,
    PaginationComponent,
    AmapComponent,
    DatePickerComponent,
    MarkdownComponent,
    PopoverComponent,
    CalendarComponent,
    IconComponent,
    NotificationComponent
  ]
})
export class MaterialsModule { }
