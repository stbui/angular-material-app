import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';

@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule
  ],
  declarations: [CollectionComponent]
})
export class CollectionModule { }
