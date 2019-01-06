import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { SearchModule } from '../../component/search';

import { ScriptComponent } from './script.component';
import { DetailComponent } from './detail/detail.component';
import { ScriptService } from './script.service';
import { ScriptDirective } from './script.directive';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule, SearchModule],
  declarations: [ScriptComponent, DetailComponent, ScriptDirective],
  providers: [ScriptService, DatePipe]
})
export class ScriptModule {}
