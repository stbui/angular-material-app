import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../component/search/index';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';

import { CollectionService } from './collection.service';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    NgxDatatableModule,
    SearchModule,
    CollectionRoutingModule
  ],
  declarations: [CollectionComponent],
  providers: [CollectionService]
})
export class CollectionModule { }
