/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { InjectionToken } from '@angular/core';

import { AmapConfig } from './amap.config';

export const STBUI_AMAP_USER_OPTIONS = new InjectionToken<AmapConfig>(
  'amap-user-options'
);

export const STBUI_AMAP_DEFAULT_OPTIONS = new InjectionToken<AmapConfig>(
  'amap-default-options'
);

export function STBUI_AMAP_DEFAULT_OPTIONS_PROVIDER_FACTORY() {
  return new AmapConfig();
}
