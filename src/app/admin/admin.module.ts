import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HeaderModule } from './header/header.module';
import { SidenavModule } from '../sidenav/sidenav.module';

import { AdminComponent } from './admin.component';
import { BrandComponent } from './brand/brand.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { FooterComponent } from './footer/footer.component';

import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    HeaderModule,
    SidenavModule,
    NavigationModule
  ],
  declarations: [
    AdminComponent,
    BrandComponent,
    CustomizerComponent,
    FooterComponent
  ],
  providers: [],
  exports: []
})
export class AdminModule {
}
