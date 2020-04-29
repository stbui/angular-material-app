import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../@stbui/shared';
import { SearchModule } from '../../component/search';
import { SpeedDialModule } from '../../component/speed-dial';

import { ContactComponent, ContactUpdateComponent } from './contact.component';
import { ContactService } from './contact.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    SearchModule,
    SpeedDialModule
  ],
  declarations: [ContactComponent, ContactUpdateComponent],
  entryComponents: [ContactUpdateComponent],
  providers: [ContactService]
})
export class ContactModule {}
