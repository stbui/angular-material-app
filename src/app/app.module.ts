import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryTodoDbService } from './todo/todo.data';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { routes } from './app.router';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
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

import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar/sidebar.service';
import { SidebarMenuComponent } from './sidebar/menu/menu.component';

import { ToastComponent } from './toast/toast.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ButtonsComponent,
    CardsComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ProfileComponent,
    BlogComponent,
    SidebarComponent,
    SidebarRightComponent,
    CustomizerComponent,
    SigninComponent,
    SignupComponent,
    PageNotFoundComponent,
    SidebarMenuComponent,
    ToastComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    MaterialModule.forRoot(),
    Ng2BootstrapModule.forRoot(),
    stbuiModule.forRoot(),
    routes,
    TodoModule,
    FormModule,
    TablesModule
  ],
  providers: [
    { provide: 'sidebar', useClass: SidebarService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
