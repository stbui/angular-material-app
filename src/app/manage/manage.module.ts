import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { NewComponent } from './new/new.component';

@NgModule({
  imports: [
    ManageRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [ManageComponent, NewComponent],
  entryComponents: [ NewComponent ]
})
export class ManageModule { }
