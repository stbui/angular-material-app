import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-crowd',
  templateUrl: './crowd.component.html',
  styleUrls: ['./crowd.component.scss']
})
export class CrowdComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {data: [], label: '人群应用渗透TOP10'}
  ];

  public pieChartLabels: string[] = ['中国移动', '中国联通', '中国电信'];
  public pieChartData: any[] = [65.0193, 21.0978, 13.883];
  public pieChartType: string = 'pie';

  public doughnutChartLabels: string[] = ['中低消费人群', '中等消费人群', '中高消费人群'];
  public doughnutChartData: number[] = [18.3679, 22.9904, 39.2957];
  public doughnutChartType: string = 'doughnut';

  public angeChartLabels: string[] = ['24岁以下', '24岁到30岁', '41岁及以上'];
  public angeChartData: number[] = [40.3837, 23.4145, 13.9447];


  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(@Inject('CrowdService') private _service) {

  }

  ngOnInit() {
    this.actvieDatas();
    this.operators();
  }

  actvieDatas() {
    this._service.actvieDatas().subscribe(res => {
      this.setBarChart(res);
    });
  }

  operators() {

    this._service.operators().subscribe(res => {
      this.setPieChart(res);
    });
  }

  setBarChart(res) {
    res.forEach((v, k) => {
      this.barChartLabels.push(v.appName);
      this.barChartData[0].data.push(v.crowdRate * 100);
    });
  }

  setPieChart(res) {
    // res.forEach((v, k) => {
      // this.pieChartLabels.push(v.attrName);
      // let rate = (v.attrValue * 100).toFixed(2);
      // this.pieChartData.push(rate);
    // });
  }

}
