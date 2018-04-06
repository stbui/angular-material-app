import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amap',
  templateUrl: './amap.component.html',
  styleUrls: ['./amap.component.scss']
})
export class AmapComponent implements OnInit {

  lat: number = 121.47;
  lng: number = 31.23;

  isView: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  view() {
    this.isView = true;
  }

}
