import { ComponentType } from '@angular/cdk/portal';

export interface NotificationInterface {
  titleClass?: NotificationIconClasses;
  positionClass?: string;
  messageClass?: string;
  notificationClass?: string;
  closeButton?: boolean;
  notificationComponent?: ComponentType<any>;
}

export interface NotificationIconClasses {
  error?: string;
  info?: string;
  success?: string;
  warning?: string;
}

