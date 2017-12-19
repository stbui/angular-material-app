import { animation, style, animate, trigger, transition, useAnimation, state, query, stagger, animateChild } from '@angular/animations';

const customAnimation = animation([
  style({
    opacity: '{{opacity}}',
    transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
  }),
  animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
  params: {
    duration: '200ms',
    delay: '0ms',
    opacity: '0',
    scale: '1',
    x: '0',
    y: '0',
    z: '0'
  }
});

export const NavigationAnimation = [
  trigger('animate', [transition('void => *', [useAnimation(customAnimation)])]),
  trigger('animateStagger', [
    state('50', style('*')),
    state('100', style('*')),
    state('200', style('*')),
    transition('void => 50', query('@*', [stagger('50ms', [animateChild()])])),
    transition('void => 100', query('@*', [stagger('100ms', [animateChild()])])),
    transition('void => 200', query('@*', [stagger('200ms', [animateChild()])])),
  ]),
  trigger('fadeInOut', [
    state('0', style({display: 'none', opacity: 0})),
    state('1', style({display: 'block', opacity: 1})),
    transition('1 => 0', animate('300ms ease-out')),
    transition('0 => 1', animate('300ms ease-in'))
  ]),
  trigger('slideInOut', [
    state('0', style({display: 'none', height: 0})),
    state('1', style({display: 'block', height: '*'})),
    transition('1 => 0', animate('300ms ease-out')),
    transition('0 => 1', animate('300ms ease-in'))
  ]),
  trigger('slideInLeft', [
    state('void', style({display: 'none', transform: 'translateX(-100%)'})),
    state('*', style({display: 'flex', transform: 'translateX(0)'})),
    transition('void => *', animate('300ms')),
    transition('* => void', animate('300ms'))
  ]),
  trigger('slideInRight', [
    state('void', style({display: 'none', transform: 'translateX(100%)'})),
    state('*', style({display: 'flex', transform: 'translateX(0)'})),
    transition('void => *', animate('300ms')),
    transition('* => void', animate('300ms'))
  ]),
  trigger('slideInTop', [
    state('void', style({display: 'none', transform: 'translateY(-100%)'})),
    state('*', style({display: 'flex', transform: 'translateY(0)'})),
    transition('void => *', animate('300ms')),
    transition('* => void', animate('300ms'))
  ]),
  trigger('slideInBottom', [
    state('void', style({display: 'none', transform: 'translateY(100%)'})),
    state('*', style({display: 'flex', transform: 'translateY(0)'})),
    transition('void => *', animate('300ms')),
    transition('* => void', animate('300ms'))
  ]),
];
