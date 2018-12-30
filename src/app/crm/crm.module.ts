import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from '../shared/shared.module';
import { WidgetModule } from '../component/widget/widget.module';
import { CrmRoutingModule } from './crm.routing';

import { CrmComponent } from './crm.component';
import { LeadComponent } from './lead/lead.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCommonComponent } from './customer-common/customer-common.component';
import {
  ContactComponent,
  ContactUpdateComponent
} from './contact/contact.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { ContractComponent } from './contract/contract.component';
import { ProductComponent } from './product/product.component';
import { NewComponent } from './lead/new/new.component';
import { LeadService } from './lead/lead.service';

import { LayoutComponent } from './layout/layout.component';
import { BrandModule } from '../admin';
import { NavigationModule } from '../component/navigation';
import { NavigationService } from './navigation.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgxDatatableModule,
    SharedModule,
    CrmRoutingModule,
    WidgetModule,
    BrandModule,
    NavigationModule
  ],
  declarations: [
    LeadComponent,
    NewComponent,
    CustomerComponent,
    CustomerCommonComponent,
    ContactComponent,
    ContactUpdateComponent,
    OpportunitiesComponent,
    CrmComponent,
    ContractComponent,
    ProductComponent,
    LayoutComponent
  ],
  entryComponents: [ContactUpdateComponent, NewComponent],
  providers: [NavigationService, LeadService]
})
export class CrmModule {}
