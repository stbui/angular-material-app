import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { ChatsComponent } from './chats/chats.component';
import { MailComponent } from './mail/mail.component';

const routers: Routes = [
  { path: '', redirectTo: '/apps/navigation', pathMatch: 'full' },
  {
    path: '', component: AdminComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'apps/chats', component: ChatsComponent},
      {path: 'apps/mail', component: MailComponent},
      {path: 'components/chart', component: ChartComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routers, {useHash: true}) ],
  exports: [ RouterModule ],
  providers: []
})

export class RoutingModule {
}
