import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ApmRoutingModule } from './apm-routing.module';
import { ScriptModule } from './script/script.module';
import { ManageModule } from './manage/manage.module';
import { CollectionModule } from './collection/collection.module';
import { PerformanceModule } from './performance/performance.module';

import { LayoutComponent } from './layout/layout.component';
import { BrandModule } from '../admin';
import { NavigationModule } from '../component/navigation';
import { NavigationService } from './layout/navigation.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ApmRoutingModule,
    BrandModule,
    NavigationModule,
    ScriptModule,
    ManageModule,
    CollectionModule,
    PerformanceModule
  ],
  declarations: [LayoutComponent],
  providers: [NavigationService]
})
export class ApmModule {}
