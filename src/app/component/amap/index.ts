import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmapComponent } from './amap.component';
import { MAP_API_CONFIG } from './amap.token';

@NgModule({
  imports: [CommonModule],
  exports: [AmapComponent],
  declarations: [AmapComponent],
  entryComponents: [AmapComponent]
})
export class AmpaModule {

  constructor(@Optional() @SkipSelf() parentModule:AmpaModule) {
    if (parentModule) {
      throw new Error('AmpaModule is already loaded. It should only be imported in your application\'s main module.');
    }
  }

  static forRoot(config?):ModuleWithProviders {
    return {
      ngModule: AmpaModule,
      providers: [
        {provide: MAP_API_CONFIG, useValue: config},
      ]
    };
  }
}
