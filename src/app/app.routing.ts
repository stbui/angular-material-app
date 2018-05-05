import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: 'apps/navigation', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'sigin', component: SigninComponent },
  { path: 'sigup', component: SignupComponent },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'apps/navigation',
        loadChildren: './navigation/navigation.module#NavigationModule'
      },
      { path: 'apps/chats', loadChildren: './chats/chats.module#ChatsModule' },
      { path: 'apps/mail', loadChildren: './mail/mail.module#MailModule' },
      {
        path: 'apps/todo/:filter',
        loadChildren: './todo/todo.module#TodoModule'
      },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormModule' },
      {
        path: 'materials',
        loadChildren: './materials/materials.module#MaterialsModule'
      },
      { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
      {
        path: 'components/chart',
        loadChildren: './chart/chart.module#ChartModule'
      },
      {
        path: 'analysis',
        loadChildren: './analysis/analysis.module#AnalysisModule'
      },
      { path: 'crm', loadChildren: './crm/crm.module#CrmModule' },
      { path: 'apm', loadChildren: './apm/apm.module#ApmModule' },
      {
        path: 'page-layouts',
        loadChildren: './page-layouts/page-layouts.module#PageLayoutsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
