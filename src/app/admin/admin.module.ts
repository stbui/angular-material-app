import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NavigationModule } from './navigation/navigation.module';
import { HeaderModule } from './header/header.module';
import { AdminComponent } from './admin.component';
import { BrandComponent } from './brand/brand.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { FooterComponent } from './footer/footer.component';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    HeaderModule,
    NavigationModule,
    TranslateModule.forRoot(),
  ],
  declarations: [
    AdminComponent,
    BrandComponent,
    CustomizerComponent,
    FooterComponent,
  ],
})
export class AdminModule {}
