import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manage', loadChildren: './manage/manage.module#ManageModule'},
      { path: 'script', loadChildren: './script/script.module#ScriptModule'},
      { path: 'collection', loadChildren: './collection/collection.module#CollectionModule'},
      { path: 'performance', loadChildren: './performance/performance.module#PerformanceModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
