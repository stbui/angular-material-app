import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { WidgetModule } from '../component/widget/widget.module';
import { CrmRoutingModule } from './crm.routing';
import { LeadModule } from './lead/lead.module';
import { ContactModule } from './contact/contact.module';

import { CrmComponent } from './crm.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCommonComponent } from './customer-common/customer-common.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { ContractComponent } from './contract/contract.component';
import { ProductComponent } from './product/product.component';

import { LayoutComponent } from './layout/layout.component';
import { BrandModule } from '../admin';
import { NavigationModule } from '../component/navigation';
import { NavigationService } from './navigation.service';

@NgModule({
  imports: [
    SharedModule,
    CrmRoutingModule,
    WidgetModule,
    BrandModule,
    NavigationModule,
    LeadModule,
    ContactModule
  ],
  declarations: [
    CustomerComponent,
    CustomerCommonComponent,
    OpportunitiesComponent,
    CrmComponent,
    ContractComponent,
    ProductComponent,
    LayoutComponent
  ],
  providers: [NavigationService]
})
export class CrmModule {}
