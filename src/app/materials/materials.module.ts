import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentModule } from '../component/component.module'

import { RoutingModule } from './materials-routing.module';
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

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ComponentModule,
    RoutingModule
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
    MarkdownComponent
  ]
})
export class MaterialsModule { }
