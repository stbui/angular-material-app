/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import {
  NgModule,
  ModuleWithProviders,
  SkipSelf,
  Optional
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmapComponent } from './amap.component';
import { AmapService } from './amap.service';
import { AmapConfig, STBUI_AMAP_DATA } from './amap.config';
import {
  STBUI_AMAP_USER_OPTIONS,
  STBUI_AMAP_DEFAULT_OPTIONS,
  STBUI_AMAP_DEFAULT_OPTIONS_PROVIDER_FACTORY
} from './amap.token';

@NgModule({
  imports: [CommonModule],
  exports: [AmapComponent],
  declarations: [AmapComponent],
  entryComponents: [AmapComponent],
  providers: [
    AmapService,
    {
      provide: STBUI_AMAP_DEFAULT_OPTIONS,
      useFactory: STBUI_AMAP_DEFAULT_OPTIONS_PROVIDER_FACTORY
    }
  ]
})
export class AmapModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AmapModule
  ) {
    if (parentModule) {
      throw new Error(
        "AmapModule is already loaded. It should only be imported in your application's main module."
      );
    }
  }

  static forRoot(config?): ModuleWithProviders {
    return {
      ngModule: AmapModule,
      providers: [
        {
          provide: STBUI_AMAP_USER_OPTIONS,
          useValue: config
        }
      ]
    };
  }
}
