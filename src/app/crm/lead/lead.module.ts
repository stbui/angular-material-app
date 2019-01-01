import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SearchModule } from '../../component/search';

import { LeadComponent } from './lead.component';
import { LeadService } from './lead.service';
import { NewComponent } from './new/new.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    SearchModule
  ],
  declarations: [LeadComponent, NewComponent],
  providers: [LeadService],
  entryComponents: [NewComponent]
})
export class LeadModule {}
