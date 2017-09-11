import { Component, OnInit } from '@angular/core';

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
  public barChartLabels: string[] = ['OPPO', 'vivo', '华为', '三星', '荣耀', '红米', '小米', '联想', '酷派', '金立'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {data: [15.8572, 13.5532, 10.4997, 10.1076, 8.32468, 5.50241, 4.54533, 3.59626, 3.34169, 3.33632], label: '使用率'}
  ];

  public pieChartLabels: string[] = ['中国移动', '中国联通', '中国电信'];
  public pieChartData: any[] = [65.0193, 21.0978, 13.883];
  public pieChartType: string = 'pie';

  constructor() {
  }

  ngOnInit() {
  }

}
