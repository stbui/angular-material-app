import { ComponentType } from '@angular/cdk/portal';

export interface NotificationInterface {
  titleClass?: string;
  positionClass?: string;
  messageClass?: string;
  notificationClass?: string;
  closeButton?: boolean;
  iconClasses?: NotificationIconClasses;
  notificationComponent?: ComponentType<any>;
}

export interface NotificationIconClasses {
  error?: string;
  info?: string;
  success?: string;
  warning?: string;
}

