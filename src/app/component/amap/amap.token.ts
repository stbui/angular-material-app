import { InjectionToken } from '@angular/core';

export interface IMapAPILoaderConfig {
  apiKey?: string;
  apiVersion?: string;
  urlPath?: string;
}

export const MAP_API_CONFIG = new InjectionToken<IMapAPILoaderConfig>('StbuiAmapData');
