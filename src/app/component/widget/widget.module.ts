import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { StateComponent } from './state/state.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatIconModule],
  declarations: [StateComponent, SwitchComponent],
  exports: [StateComponent, SwitchComponent]
})
export class WidgetModule {}
