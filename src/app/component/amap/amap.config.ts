/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { ViewContainerRef, InjectionToken } from '@angular/core';

export const STBUI_AMAP_DATA = new InjectionToken<any>('StbuiAmapData');

export class AmapConfig {
  apiKey?: string;
  apiVersion?: string = '1.4.5';
  urlPath?: string = '//webapi.amap.com/maps';
}
