import { ComponentType } from '@angular/cdk/portal';

export interface NotificationInterface {
  titleClass?: NotificationIconClasses;
  notificationComponent?: ComponentType<any>;
}

export interface NotificationIconClasses {
  error?: string;
  info?: string;
  success?: string;
  warning?: string;
}

