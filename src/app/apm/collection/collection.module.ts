import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../../shared/shared.module';
import { SearchModule } from '../../component/search';
import { WidgetModule } from '../../component/widget';

import { CollectionComponent } from './collection.component';
import { CollectionService } from './collection.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    NgxChartsModule,
    SearchModule,
    WidgetModule
  ],
  declarations: [CollectionComponent, DetailComponent],
  providers: [CollectionService, DatePipe]
})
export class CollectionModule {}
