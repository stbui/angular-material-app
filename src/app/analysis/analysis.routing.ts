import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrowdComponent } from './crowd/crowd.component';
import { PreferenceComponent } from './preference/preference.component';
import { PopulationComponent } from './population/population.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ScenePortraitComponent } from './scene-portrait/scene-portrait.component';

const routes: Routes = [
  {path: '', component: CrowdComponent},
  {path: 'crowd', component: CrowdComponent},
  {path: 'preference', component: PreferenceComponent},
  {path: 'population', component: PopulationComponent},
  {path: 'equipment', component: EquipmentComponent},
  {path: 'scePortrait', component: ScenePortraitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule {

}
