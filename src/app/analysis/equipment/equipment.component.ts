import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  brand_data: any = [];
  operator_data: any = [];

  constructor(@Inject('AnalysisService') private _service) {
  }

  ngOnInit() {

    this._service.crowdDevice();
    this.brands();
    this.operators();
  }

  operators() {
    this._service.crowdDevice$.subscribe(res => {
      if (res.datas) {
        console.log(res.datas.operators)
        res.datas.operators.map((item) => {
          this.operator_data.push({
            name: item.attrName,
            value: (item.attrValue * 100).toFixed(2)
          });
        });
      }
    });
  }

  brands() {
    this._service.crowdDevice$.subscribe(res => {
      if (res.datas) {
        res.datas.brand.list.map((item) => {
          this.brand_data.push({
            name: item.attrName,
            value: (item.attrValue * 100).toFixed(2)
          });
        });
      }
    });
  }

}
