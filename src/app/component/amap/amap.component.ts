import { Component, Input } from '@angular/core';

declare var AMap: any;

@Component({
  selector: 'stbui-amap',
  templateUrl: './amap.component.html',
  styleUrls: ['./amap.component.scss']
})
export class AmapComponent {

  @Input() width: string = '1000px';
  @Input() height: string = '500px';
  @Input() lat: number = 116.397428;
  @Input() lng: number = 39.90923;

  zoom: number = 11;
  id;

  constructor() {
    this.setMapId();
    this.getAmapStyles();
    this.loadScript(this.getSrc());
  }

  setMapId() {
    let random = Math.floor(Math.random() * 100);
    this.id = `container_${random}`;
  }

  getAmapStyles() {
    return {
      width: this.width,
      heigiht: this.height
    };
  }

  loadScript(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';

    node.onload = () => {
      this.loadMap();
    };

    document.getElementsByTagName('head')[0].appendChild(node);
  }

  loadMap() {
    new AMap.Map(this.id, {
      resizeEnable: true,
      zoom: this.zoom,
      center: [this.lat, this.lng]
    });
  }

  getSrc() {
    const url = 'http://webapi.amap.com/maps?v=1.3&key=5ca4be36897408ccfacadf90df1c5f91';

    return url;
  }
}
