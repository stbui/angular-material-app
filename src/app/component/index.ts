import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';


@NgModule({
  imports: [CommonModule],
  exports: [BadgeComponent],
  declarations: [BadgeComponent]
})


export class stbuiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: stbuiModule,
      providers: []
    };
  }
}
