/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { AmapConfig, STBUI_AMAP_DATA } from './amap.config';

import {
  STBUI_AMAP_DEFAULT_OPTIONS,
  STBUI_AMAP_USER_OPTIONS
} from './amap.token';

declare var AMap: any;

@Injectable()
export class AmapService {
  private _mapLoaded: boolean = false;
  private _mapSdk: any;

  onLoad: Subject<any> = new Subject();
  readonly onCreate: Subject<any> = new Subject();

  constructor(
    @Inject(STBUI_AMAP_DEFAULT_OPTIONS) private _defaultConfig: AmapConfig,
    @Inject(STBUI_AMAP_USER_OPTIONS) private _userConfig: AmapConfig
  ) {
    if (!this._mapLoaded) {
      this.load();
    }
  }

  load() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = this._getSrc();

    script.onload = event => {
      this._mapLoaded = true;
      this.onLoad.next(event);
    };

    script.onerror = event => this.onLoad.next(event);

    document.getElementsByTagName('head')[0].appendChild(script);

    return this._mapLoaded;
  }

  createMap(element?, options?) {
    if (this._mapSdk) {
      this._mapSdk = new AMap.Map(element, options);
    }

    this.onLoad.subscribe(() => {
      this._mapSdk = new AMap.Map(element, options);
    });
  }

  destoryMap() {
    this.onCreate.subscribe(map => {
      map.clearMap();
      map.destory();
    });
  }

  private _getSrc(): string {
    const _config = Object.assign(this._defaultConfig, this._userConfig);
    const { urlPath, apiVersion, apiKey } = _config;

    return `${urlPath}?v=${apiVersion}&key=${apiKey}`;
  }
}
