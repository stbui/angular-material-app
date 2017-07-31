import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { RoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { HeaderModule } from './header/header.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { TodoModule } from './todo/todo.module';
import { FormModule } from './forms/forms.module';
import { TablesModule } from './tables/tables.module';
import { ChatsModule } from './chats/chats.module';
import { MailModule } from './mail/mail.module';
import { PagesModule } from './pages/pages.module';
import { NavigationModule } from './navigation/navigation.module';
import { MaterialsModule } from './materials/materials.module';
import { ChartModule } from './chart/chart.module'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    CustomizerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    RoutingModule,
    HeaderModule,
    TodoModule,
    FormModule,
    TablesModule,
    ChatsModule,
    MailModule,
    PagesModule,
    NavigationModule,
    MaterialsModule,
    SidenavModule,
    ChartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
