import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './landing/landing.component';
import { ShieldComponent } from './shield.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: ShieldComponent },
      { path: 'dashboard', component: ShieldComponent },
      { path: 'nodes', component: LandingComponent },
      { path: 'operator', component: LandingComponent },
      { path: 'payment', component: LandingComponent },
      { path: 'record', component: LandingComponent },
      { path: 'purchase', component: LandingComponent },
      { path: 'workorder', component: LandingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShieldRoutingModule { }
