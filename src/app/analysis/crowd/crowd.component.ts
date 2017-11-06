import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-crowd',
  templateUrl: './crowd.component.html',
  styleUrls: ['./crowd.component.scss'],
})
export class CrowdComponent implements OnInit {

  permeability: any = [];
  ageData: any = [];
  consumerData: any = [];
  operatorData: any = [];

  constructor(@Inject('AnalysisService') private _service) {
  }

  ngOnInit() {
    this.getCrowdOverview();
  }

  getCrowdOverview() {
    this._service.getCrowdOverview();
    this.actvieDatas();
    this.age();
    this.consumer();
    this.operators();
  }

  // 渗透
  actvieDatas() {
    this._service.crowdOverview$.subscribe(res => {
      if (res.datas) {
        console.log(res.datas);
        res.datas.actvieDatas.map((item) => {
          this.permeability.push({
            name: item.appName,
            value: (item.crowdRate * 100).toFixed(2)
          });
        });
      }
    });
  }

  operators() {
    this._service.crowdOverview$.subscribe(res => {
      if (res.datas) {
        res.datas.operators.map((item) => {
          this.operatorData.push({
            name: item.attrName,
            value: (item.attrValue * 100).toFixed(2)
          });
        });
      }
    });
  }

  age() {
    this._service.crowdOverview$.subscribe(res => {
      if (res.datas) {
        res.datas.age.map((item) => {
          this.ageData.push({
            name: item.attrName,
            value: (item.attrValue * 100).toFixed(2)
          });
        });
      }
    });
  }

  consumer() {
    this._service.crowdOverview$.subscribe(res => {
      if (res.datas) {
        res.datas.consumer.map((item) => {
          this.consumerData.push({
            name: item.attrName,
            value: (item.attrValue * 100).toFixed(2)
          });
        });
      }
    });
  }
}
