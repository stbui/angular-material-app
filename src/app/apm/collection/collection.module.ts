import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { SearchModule } from '../../component/search';

import { CollectionComponent } from './collection.component';
import { CollectionService } from './collection.service';

@NgModule({
  imports: [CommonModule, SharedModule, HttpClientModule, SearchModule],
  declarations: [CollectionComponent],
  providers: [CollectionService]
})
export class CollectionModule {}
