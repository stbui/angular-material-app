import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoModule } from './todo/todo.module';
// import { ComponentModule } from './component/component.module'
import { stbuiModule } from './component/index';
import { FormModule } from './forms/forms.module';
import { TablesModule } from './tables/tables.module';
import { ChatsModule } from './chats/chats.module';
import { MailModule } from './mail/mail.module';
import { PagesModule } from './pages/pages.module';
import { NavigationModule } from './navigation/navigation.module';
import { MaterialsModule } from './materials/materials.module';
import { SidenavModule } from './sidenav/sidenav.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar/sidebar.service';
import { SidebarMenuComponent } from './sidebar/menu/menu.component';
import { ChartComponent } from './chart/chart.component';
import { AdminComponent } from './admin/admin.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    BlogComponent,
    SidebarComponent,
    SidebarRightComponent,
    CustomizerComponent,
    SigninComponent,
    SignupComponent,
    PageNotFoundComponent,
    SidebarMenuComponent,
    ChartComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    stbuiModule.forRoot(),
    RoutingModule,
    TodoModule,
    FormModule,
    TablesModule,
    ChatsModule,
    MailModule,
    PagesModule,
    NavigationModule,
    ChartsModule,
    MaterialsModule,
    SidenavModule
  ],
  providers: [
    { provide: 'sidebar', useClass: SidebarService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
