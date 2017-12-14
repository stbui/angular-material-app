import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AnalysisRoutingModule } from './analysis.routing';

import { CrowdComponent } from './crowd/crowd.component';
import { PreferenceComponent } from './preference/preference.component';
import { PopulationComponent } from './population/population.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ScenePortraitComponent } from './scene-portrait/scene-portrait.component';

import { AnalysisService } from './analysis.service';
import { PermeabilityComponent } from './crowd/permeability/permeability.component';
import { AgeComponent } from './crowd/age/age.component';
import { ConsumerComponent } from './crowd/consumer/consumer.component';
import { GenderComponent } from './crowd/gender/gender.component';
import { BrandComponent } from './crowd/brand/brand.component';
import { OperatorsComponent } from './crowd/operators/operators.component';
import { RegionComponent } from './crowd/region/region.component';
import { EquipmentBrandComponent } from './equipment/brand/brand.component';
import { PreferenceFieldComponent } from './preference/field/field.component';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    AnalysisRoutingModule,
    NgxChartsModule
  ],
  declarations: [
    CrowdComponent,
    PreferenceComponent,
    PopulationComponent,
    EquipmentComponent,
    ScenePortraitComponent,
    PermeabilityComponent,
    AgeComponent,
    ConsumerComponent,
    GenderComponent,
    BrandComponent,
    OperatorsComponent,
    RegionComponent,
    EquipmentBrandComponent,
    PreferenceFieldComponent
  ],
  providers: [
    {provide: 'AnalysisService', useClass: AnalysisService}
  ]
})
export class AnalysisModule {
}
