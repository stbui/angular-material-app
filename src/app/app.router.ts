import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

export const router: Routes = [
  { path: '', redirectTo: '404', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signin', component: SigninComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'todo', redirectTo: 'todo/All' },
  { path: 'toast', component: ToastComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'profile', component: ProfileComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router,{useHash: true});
