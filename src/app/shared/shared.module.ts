import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialComponentsModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialComponentsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialComponentsModule
  ]
})
export class SharedModule {
}
