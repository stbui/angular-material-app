import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    RoutingModule
  ],
  declarations: [
    NavigationComponent
  ]
})
export class NavigationModule { }
