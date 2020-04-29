import { NgModule } from '@angular/core';
import { SharedModule } from '../../@stbui/shared/shared.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [RouterModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
