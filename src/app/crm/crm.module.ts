import { NgModule } from '@angular/core';

import { SharedModule } from '../../@stbui/shared';
import { BrandModule } from '../../@stbui/admin';
import { NavigationModule } from '../../@stbui/navigation';

import { LayoutComponent } from './layout/layout.component';
import { NavigationService } from './layout/navigation.service';

import { CrmRoutingModule } from './crm-routing.module';
import { WidgetModule } from '../component/widget/widget.module';
import { LeadModule } from './lead/lead.module';
import { ContactModule } from './contact/contact.module';
import { CrmComponent } from './crm.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCommonComponent } from './customer-common/customer-common.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { ContractComponent } from './contract/contract.component';
import { ProductComponent } from './product/product.component';



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
export class CrmModule { }
