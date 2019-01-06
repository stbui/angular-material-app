import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScriptComponent } from './script/script.component';
import { ManageComponent } from './manage/manage.component';
import { SettingComponent } from './manage/setting/setting.component';
import { CollectionComponent } from './collection/collection.component';
import { PerformanceComponent } from './performance/performance.component';
import { DetailComponent } from './performance/detail/detail.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { BehaviorDetailComponent } from './behavior/detail/detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ScriptComponent },
      { path: 'script', component: ScriptComponent },
      { path: 'manage', component: ManageComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'collection', component: CollectionComponent },
      { path: 'performance', component: PerformanceComponent },
      { path: 'performance/:id', component: DetailComponent },
      { path: 'behavior', component: BehaviorComponent },
      { path: 'behavior/:id', component: BehaviorDetailComponent },
      { path: 'track', component: BehaviorComponent },
      { path: 'diagram', component: BehaviorComponent },
      { path: 'alarm', component: BehaviorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApmRoutingModule {}
