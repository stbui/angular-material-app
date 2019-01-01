import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [UserComponent],
  providers: [UserService]
})
export class UserModule {}
