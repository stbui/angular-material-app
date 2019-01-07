import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './landing/landing.component';
import { ShieldComponent } from './shield.component';

const routes: Routes = [
  { path: 'dashboard', component: ShieldComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ShieldComponent },
      { path: 'landing', component: LandingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShieldRoutingModule {}
