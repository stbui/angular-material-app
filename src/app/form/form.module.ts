import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsComponent } from './elements/elements.component';
import { RoutingModule } from './form.routes'

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [ElementsComponent]
})
export class FormModule { }
