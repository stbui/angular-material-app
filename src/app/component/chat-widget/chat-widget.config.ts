/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { ViewContainerRef, InjectionToken } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';

export const STBUI_CHATWIDGET_DATA = new InjectionToken<any>(
  'StbuiChatWidgetData'
);

export type ChatWidgetHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';
export type ChatWidgetVerticalPosition = 'top' | 'bottom';

export class ChatWidgetConfig<D = any> {
  panelClass?: string | string[];
  viewContainerRef?: ViewContainerRef;
  direction?: Direction;
  data?: D | null = null;

  horizontalPosition?: ChatWidgetHorizontalPosition = 'right';
  verticalPosition?: ChatWidgetVerticalPosition = 'top';
}
