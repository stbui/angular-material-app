import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';
import { AuthGuard } from './auth.guard';
import { NotifyService } from './notify.service';

@NgModule({
  providers: [AuthService, ConfigService, AuthGuard, NotifyService]
})
export class CoreModule {}
