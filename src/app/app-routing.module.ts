import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartComponent } from './chart/chart.component';
import { ChatsComponent } from './chats/chats.component';
import { MailComponent } from './mail/mail.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routers: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'test', component: SidenavComponent },
  {path: 'signin', component: SigninComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: 'profile', component: ProfileComponent},
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
