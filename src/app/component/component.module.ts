import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BadgeComponent } from './badge/badge.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ButtonComponent,
    BadgeComponent,
    DialogComponent
  ]
})
export class ComponentModule { }
