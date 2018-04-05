/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';


export const NotificationAnimations: {
  readonly contentFade: AnimationTriggerMetadata;
  readonly notificationState: AnimationTriggerMetadata;
} = {
  contentFade: trigger('contentFade', [
    transition(':enter', [
      style({opacity: '0'}),
      animate(`375ms cubic-bezier(0.4,0.0,0.2,1)`)
    ])
  ]),

  notificationState: trigger('state', [
    state('visible-top, visible-bottom', style({transform: 'translateY(0%)'})),
    transition('visible-top => hidden-top, visible-bottom => hidden-bottom',
      animate(`195ms cubic-bezier(0.4,0.0,1,1)`)),
    transition('void => visible-top, void => visible-bottom',
      animate(`225ms cubic-bezier(0.0,0.0,0.2,1)`)),
  ])
};
