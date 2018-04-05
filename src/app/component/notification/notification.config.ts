/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { ViewContainerRef, InjectionToken } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';

export const STBUI_NOTIFICATION_DATA = new InjectionToken<any>('StbuiNonticationData');

export type HorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';
export type VerticalPosition = 'top' | 'bottom';

export class NotificationConfig<D = any> {
  viewContainerRef?: ViewContainerRef;
  duration?: number = 2000;
  direction?: Direction;
  data?: D | null = null;

  horizontalPosition?: HorizontalPosition = 'right';
  verticalPosition?: VerticalPosition = 'top';
}
