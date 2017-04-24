import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ComponentModule } from '../component/component.module';
import { RoutingModule } from './navigation-routing.module';
import { NavigationService } from './navigation.service';
import { NavigationComponent } from './navigation.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    RoutingModule,
    ComponentModule
  ],
  declarations: [
    NavigationComponent
  ],
  providers: [
    { provide: 'NavigationService', useClass: NavigationService }
  ]
})
export class NavigationModule { }
