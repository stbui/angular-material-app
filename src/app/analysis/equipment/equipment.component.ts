import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {data: [], label: '使用率'}
  ];

  // public pieChartLabels: string[] = [];
  public pieChartLabels: string[] = ['中国移动', '中国联通', '中国电信'];
  public pieChartData: any[] = [65.0193, 21.0978, 13.883];
  public pieChartType: string = 'pie';

  constructor(@Inject('AnalysisService') private _service) {
  }

  ngOnInit() {
    this.crowdDevice();
  }

  crowdDevice() {
    this._service.crowdDevice();
    this._service.crowdDevice$.subscribe(res => {

      this.operators(res.operators);
      this.brand(res.brand);
    });
  }

  operators(res) {
    if (!res) {
      return;
    }
    // console.log(res);

    let attrValue = [];
    let attrName = res.filter(item => {
      attrValue.push(item.attrValue);
      return item.attrName;
    });

    // this.pieChartLabels = attrName;
    // this.pieChartData = attrValue;
  }

  brand(res) {
    if (!res || !res.list) {
      return;
    }

    let attrValue = [];
    let attrName = res.list.map(item => {
      attrValue.push((item.attrValue * 100).toFixed(2));
      return item.attrName;
    });
    this.barChartLabels = attrName;
    this.barChartData[0].data = attrValue;
  }

}
