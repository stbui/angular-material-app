import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScriptComponent } from './script.component';

const routes: Routes = [
  { path: '', component: ScriptComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptRoutingModule { }
