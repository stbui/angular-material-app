import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ElementsComponent } from './elements/elements.component';
import { RoutingModule } from './forms.routes'

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [ElementsComponent]
})
export class FormsModule { }
