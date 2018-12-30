import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/pages/blog', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'sigin', component: SigninComponent },
  { path: 'sigup', component: SignupComponent },
  {
    path: 'apps/navigation',
    loadChildren: './navigation/navigation.module#NavigationModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'mail',
    loadChildren: './mail/mail.module#MailModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'apps/chats',
    loadChildren: './chats/chats.module#ChatsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'crm',
    loadChildren: './crm/crm.module#CrmModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'apm',
    loadChildren: './apm/apm.module#ApmModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
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
        path: 'analysis',
        loadChildren: './analysis/analysis.module#AnalysisModule'
      },
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
