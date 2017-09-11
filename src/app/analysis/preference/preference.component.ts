import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['社交网络', '即时通讯', '综合视频', '动漫', '移动音乐', '移动K歌', '综合电商', '中小学类教育', '应用商店', '安全管理'];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {data: [15.8572, 13.5532, 10.4997, 10.1076, 8.32468, 5.50241, 4.54533, 3.59626, 3.34169, 3.33632], label: '活跃人数(万)'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
