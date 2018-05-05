/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { AmapConfig, STBUI_AMAP_DATA } from './amap.config';

import {
  STBUI_AMAP_DEFAULT_OPTIONS,
  STBUI_AMAP_USER_OPTIONS
} from './amap.token';

declare var AMap: any;

@Injectable()
export class AmapService {
  private _mapSdk: any;

  readonly onLoad: Subject<any> = new Subject();
  readonly onMap: Subject<any> = new Subject();

  constructor(
    @Inject(STBUI_AMAP_DEFAULT_OPTIONS) private _defaultConfig: AmapConfig,
    @Inject(STBUI_AMAP_USER_OPTIONS) private _userConfig: AmapConfig
  ) {
    this.load();
  }

  load() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = this._getSrc();

    script.onload = event => {
      this.onLoad.next(event);
      this.onLoad.complete();
    };

    script.onerror = event => {
      this.onLoad.error(event);
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  createMap(element?, options?) {
    if (this._mapSdk) {
      this._mapSdk = new AMap.Map(element, options);
      this.onMap.next(this._mapSdk);
    }

    this.onLoad.subscribe(() => {
      this._mapSdk = new AMap.Map(element, options);
      this.onMap.next(this._mapSdk);
      this.onMap.complete();
    });

    return this.onMap;
  }

  destroyMap() {
    this.onMap.subscribe(map => {
      map.clearMap();
      // map.destroy();
    });
  }

  private _getSrc(): string {
    const _config = Object.assign(this._defaultConfig, this._userConfig);
    const { urlPath, apiVersion, apiKey } = _config;

    return `${urlPath}?v=${apiVersion}&key=${apiKey}`;
  }
}
