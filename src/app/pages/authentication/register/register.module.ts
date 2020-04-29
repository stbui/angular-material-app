import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../@stbui/shared';
import { CoreModule } from '../../../../@stbui/core';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  declarations: [RegisterComponent],
})
export class RegisterModule { }
