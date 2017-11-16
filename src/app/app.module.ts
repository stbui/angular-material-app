import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import 'hammerjs';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { AppRoutingModule } from './app.routing';

import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

// import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true
// };

import { CoreModule } from './core/core.module';

import { FireBaseComponentsModule } from './shared/firebase.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    CustomizerComponent,
    DashboardComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    SharedModule,
    HeaderModule,
    SidenavModule,
    AppRoutingModule,
    FireBaseComponentsModule,
    CoreModule,
    ReactiveFormsModule,
    // PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
