/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { ViewContainerRef, InjectionToken } from '@angular/core';

export const STBUI_AMAP_DATA = new InjectionToken<any>('StbuiAmapData');

export class AmapConfig {
  apiKey?: string;
  apiVersion?: string = '1.4.3';
  urlPath?: string = 'http://webapi.amap.com/maps';
}
