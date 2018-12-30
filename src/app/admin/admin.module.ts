import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

import { NavigationModule } from '../component/navigation';
import { BrandModule } from './brand/brand.module';
import { HeaderModule } from './header/header.module';
import { AdminComponent } from './admin.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    RouterModule,
    TranslateModule.forRoot(),
    SharedModule,
    NavigationModule,
    HeaderModule,
    BrandModule
  ],
  declarations: [AdminComponent, CustomizerComponent, FooterComponent]
})
export class AdminModule {}
