import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToastComponent } from './toast/toast.component';
import { ChartComponent } from './chart/chart.component';
import { ChatsComponent } from './chats/chats.component';
import { TodoComponent } from './todo/todo.component';



const routers: Routes = [
  // { path: '', redirectTo: '404', pathMatch: 'full' },
  {path: 'apps/test', component: ChatsComponent},
  {path: 'signin', component: SigninComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: '', component: AdminComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'apps/chats', component: ChatsComponent},
      {path: 'apps/todo/:filter', component: TodoComponent },
      {path: 'components/buttons', component: ButtonsComponent},
      {path: 'components/cards', component: CardsComponent},
      {path: 'components/toast', component: ToastComponent},
      {path: 'components/chart', component: ChartComponent},
      {path: 'pages/about', component: AboutComponent},
      {path: 'pages/services', component: ServicesComponent},
      {path: 'pages/contact', component: ContactComponent},
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
