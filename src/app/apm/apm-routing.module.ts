import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PerformanceComponent } from './performance/performance.component';

const routes: Routes = [
  {path: '', component: ErrorComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'performance', component: PerformanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApmRoutingModule { }
