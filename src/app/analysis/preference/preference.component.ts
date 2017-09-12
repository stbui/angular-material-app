import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {

  public barChartOptions: any = {};
  public barChartLabels: string[] = [];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {data: [], label: '活跃人数(万)'}
  ];

  coverRateListDatas: any[] = [];
  activeDatas: any[] = [];

  constructor(@Inject('AnalysisService') private _service) {
  }

  ngOnInit() {
    this.getCrowdCateList();
    this.coverRateList();
    this.getCrowdAppList();
  }

  getCrowdCateList() {
    this._service.getCrowdCateList();

    this._service.crowdCateList$.subscribe(res => {
      const list = res.list;
      if (!list) {
        return;
      }

      let crowdActiveNums = [];
      let categoryName = list.map(v => {
        crowdActiveNums.push(v.crowdActiveNums);
        return v.categoryName;
      });

      this.barChartLabels = categoryName;
      this.barChartData[0].data = crowdActiveNums;
    });
  }

  coverRateList() {
    this._service.crowdCateList$.subscribe(res => {
      const coverRateList = res.coverRateList;
      if (!coverRateList) {
        return;
      }
      this.coverRateListDatas = coverRateList;
    });
  }

  getCrowdAppList() {
    this._service.getCrowdAppList();
    this._service.crowdApplist$.subscribe(res => {
      const activeDatas = res.activeDatas;
      if (!activeDatas) {
        return;
      }
      this.activeDatas = activeDatas.datas;
    });
  }

}
