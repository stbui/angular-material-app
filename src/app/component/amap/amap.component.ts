import { Component, Input } from '@angular/core';
import { environment } from "../../../environments/environment";

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

  private zoom:number = 11;
  private id;
  private isLoaded = false;

  constructor() {
    this.setMapId();
    this.getAmapStyles();

    this.loadScript(environment.amapApi);
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

  geolocation() {
    let map = new AMap.Map('container');

    map.plugin('AMap.Geolocation', () => {
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      map.addControl(geolocation);
    });
  }
}
