import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
