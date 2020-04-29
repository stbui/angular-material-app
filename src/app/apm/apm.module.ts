import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../@stbui/shared';
import { BrandModule } from '../../@stbui/admin';
import { NavigationModule } from '../../@stbui/navigation';

import { LayoutComponent } from './layout/layout.component';
import { NavigationService } from './layout/navigation.service';

import { ApmRoutingModule } from './apm-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ScriptModule } from './script/script.module';
import { ManageModule } from './manage/manage.module';
import { CollectionModule } from './collection/collection.module';
import { PerformanceModule } from './performance/performance.module';
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
export class ApmModule { }
