import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../@stbui/shared';
import { SearchModule } from '../../component/search';

import { ManageService } from './manage.service';
import { ManageComponent } from './manage.component';
import { NewComponent } from './new/new.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule, SearchModule],
  declarations: [ManageComponent, NewComponent, SettingComponent],
  providers: [ManageService],
  entryComponents: [NewComponent]
})
export class ManageModule { }
