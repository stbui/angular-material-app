import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ApmRoutingModule } from './apm-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ScriptModule } from './script/script.module';
import { ManageModule } from './manage/manage.module';
import { CollectionModule } from './collection/collection.module';
import { PerformanceModule } from './performance/performance.module';

import { LayoutComponent } from './layout/layout.component';
import { BrandModule } from '../admin';
import { NavigationModule } from '../component/navigation';
import { NavigationService } from './layout/navigation.service';
import { BehaviorModule } from './behavior/behavior.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ApmRoutingModule,
    DashboardModule,
    BrandModule,
    NavigationModule,
    ScriptModule,
    ManageModule,
    CollectionModule,
    PerformanceModule,
    BehaviorModule
  ],
  declarations: [LayoutComponent],
  providers: [NavigationService]
})
export class ApmModule {}
