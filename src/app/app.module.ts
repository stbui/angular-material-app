import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { TodoModule } from './todo/todo.module';
import { FormModule } from './forms/forms.module';
import { TablesModule } from './tables/tables.module';
import { ChatsModule } from './chats/chats.module';
import { MailModule } from './mail/mail.module';
import { PagesModule } from './pages/pages.module';
import { NavigationModule } from './navigation/navigation.module';
import { MaterialsModule } from './materials/materials.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { ChartComponent } from './chart/chart.component';
import { AdminComponent } from './admin/admin.component';
// import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarRightComponent,
    CustomizerComponent,
    ChartComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    RoutingModule,
    TodoModule,
    FormModule,
    TablesModule,
    ChatsModule,
    MailModule,
    PagesModule,
    NavigationModule,
    // ChartsModule,
    MaterialsModule,
    SidenavModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
