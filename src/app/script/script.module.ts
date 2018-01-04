import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptRoutingModule } from './script-routing.module';
import { ScriptComponent } from './script.component';

@NgModule({
  imports: [
    CommonModule,
    ScriptRoutingModule
  ],
  declarations: [ScriptComponent]
})
export class ScriptModule { }
