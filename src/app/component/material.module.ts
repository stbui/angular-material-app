import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdAutocompleteModule, MdButtonModule, MdCardModule, MdCheckboxModule, MdDatepickerModule, MdDialogModule,
  MdGridListModule, MdIconModule, MdInputModule, MdListModule,
  MdMenuModule, MdNativeDateModule, MdProgressBarModule, MdProgressSpinnerModule, MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule, MdSnackBarModule, MdTabsModule, MdToolbarModule, MdTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    MdInputModule,
    MdTabsModule,
    MdIconModule,
    MdListModule,
    MdButtonModule,
    MdToolbarModule,
    MdDialogModule,
    MdMenuModule,
    MdGridListModule,
    MdCardModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdSliderModule,
    MdAutocompleteModule,
    MdDatepickerModule,
    MdSlideToggleModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdSelectModule
  ]
})
export class MaterialComponentsModule { }
