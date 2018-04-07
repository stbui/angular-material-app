/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { Component, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { AmapService } from './amap.service';

declare var AMap: any;

@Component({
  selector: 'stbui-amap',
  templateUrl: './amap.component.html',
  styleUrls: ['./amap.component.scss']
})
export class AmapComponent implements OnInit, OnDestroy {
  @Input() width: string;
  @Input() height: string;
  @Input() lat: number = 116.397428;
  @Input() lng: number = 39.90923;
  @Input() zoom: number = 11;
  @Input() options: object = {};

  constructor(private api: AmapService, private elementRef: ElementRef) {}

  ngOnInit() {
    const container = this.elementRef.nativeElement.querySelector(
      '.amp-container'
    );

    let options = {
      resizeEnable: true,
      zoom: this.zoom,
      center: [this.lat, this.lng]
    };

    options = Object.assign(options, this.options);

    this.api.createMap(container, options).subscribe(map => console.log(map));
  }

  getStyles() {
    return {
      width: this.width,
      height: this.height
    };
  }

  ngOnDestroy() {
    this.api.destroyMap();
  }
}
