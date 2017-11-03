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

  public angeChartLabels: any[] = ["24岁以下", "24岁到30岁", "41岁及以上"];
  public angeChartData: any[] = ["40.38", "23.41", "13.94"];


  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(@Inject('AnalysisService') private _service) {

  }

  ngOnInit() {
    this.getCrowdOverview();
  }

  getCrowdOverview() {
    this._service.getCrowdOverview();
    this.actvieDatas();
    this.operators();
    this.age();
  }

  actvieDatas() {
    this._service.crowdOverview$.subscribe(res => {
      if (res.actvieDatas) {
        this.setBarChart(res.actvieDatas);
      }
    });
  }

  operators() {
    this._service.crowdOverview$.subscribe(res => {
      if (res.operators) {
        this.setPieChart(res.operators);
      }
    });
  }

  age() {
    this._service.crowdOverview$.subscribe(res => {
      if (res.age) {

        let attrValue = [];
        let attrName = res.age.map(item => {
          attrValue.push((item.attrValue * 100).toFixed(2));
          return item.attrName;
        });
        this.angeChartLabels = attrName;
        this.angeChartData = attrValue;
      }
    });
  }

  consumer() {
    this._service.crowdOverview$.subscribe(res => {
      if (res.consumer) {

      }
    });
  }

  setBarChart(res) {
    let rate = [];
    let appName = res.map(item => {
      rate.push((item.crowdRate * 100).toFixed(2));
      return item.appName;
    });

    this.barChartLabels = appName;
    this.barChartData[0].data = rate;
  }

  setPieChart(res) {
    let attrValue = [];
    let attrName = res.map(item => {
      attrValue.push((item.attrValue * 100).toFixed(2));
      return item.attrName;
    });
    this.pieChartLabels = attrName;
    this.pieChartData = attrValue;

  }

}
