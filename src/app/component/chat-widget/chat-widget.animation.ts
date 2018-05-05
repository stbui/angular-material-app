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
  AnimationTriggerMetadata
} from '@angular/animations';

export const ChatWidgetAnimations: {
  readonly chatWidgetState: AnimationTriggerMetadata;
} = {
  chatWidgetState: trigger('state', [
    state('void, hidden', style({ transform: 'translateY(100%)' })),
    state('visible', style({ transform: 'translateY(0%)' })),
    transition(
      'visible => void, visible => hidden',
      animate(`375ms cubic-bezier(0.4,0.0,1,1)`)
    ),
    transition('void => visible', animate(`195ms cubic-bezier(0.0,0.0,0.2,1)`))
  ])
};
