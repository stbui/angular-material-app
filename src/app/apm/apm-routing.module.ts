import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ScriptComponent } from './script/script.component';
import { ManageComponent } from './manage/manage.component';
import { CollectionComponent } from './collection/collection.component';
import { PerformanceComponent } from './performance/performance.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ScriptComponent },
      { path: 'script', component: ScriptComponent },
      { path: 'manage', component: ManageComponent },
      { path: 'collection', component: CollectionComponent },
      { path: 'performance', component: PerformanceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApmRoutingModule {}
