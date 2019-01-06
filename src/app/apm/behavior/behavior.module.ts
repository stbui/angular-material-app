import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { SearchModule } from '../../component/search';

import { BehaviorComponent } from './behavior.component';
import { BehaviorService } from './behavior.service';
import { BehaviorDetailComponent } from './detail/detail.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule, SearchModule],
  declarations: [BehaviorComponent, BehaviorDetailComponent],
  providers: [BehaviorService]
})
export class BehaviorModule {}
