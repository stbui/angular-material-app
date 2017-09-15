import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { AnalysisRoutingModule } from './analysis.routing';

import { CrowdComponent } from './crowd/crowd.component';
import { PreferenceComponent } from './preference/preference.component';
import { PopulationComponent } from './population/population.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ScenePortraitComponent } from './scene-portrait/scene-portrait.component';

import { AnalysisService } from './analysis.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AnalysisRoutingModule,
    ChartsModule
  ],
  declarations: [CrowdComponent, PreferenceComponent, PopulationComponent, EquipmentComponent, ScenePortraitComponent],
  providers: [
    {provide: 'AnalysisService', useClass: AnalysisService}
  ]
})
export class AnalysisModule {
}
