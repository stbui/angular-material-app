import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { SearchModule } from '../../component/search';

import { ErrorComponent } from './error.component';
import { ErrorService } from './error.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule, SearchModule],
  declarations: [ErrorComponent, DetailComponent],
  providers: [ErrorService]
})
export class ErrorModule {}
