import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {

  field_data: any = [];

  coverRateListDatas: any[] = [];
  activeDatas: any[] = [];

  constructor(@Inject('AnalysisService') private _service) {
  }

  ngOnInit() {
    this._service.getCrowdCateList();
    this.getCrowdCateList();
    this.coverRateList();

    this._service.getCrowdAppList();
    this.getCrowdAppList();
  }

  getCrowdCateList() {

    this._service.crowdCateList$.subscribe(res => {

      if (res.datas) {
        res.datas.list.map((item) => {
          this.field_data.push({
            name: item.categoryName,
            value: item.crowdActiveNums
          });
        });
      }

    });
  }

  coverRateList() {
    this._service.crowdCateList$.subscribe(res => {
      if (res.datas) {
        this.coverRateListDatas = res.datas.coverRateList;
      }
    });
  }

  getCrowdAppList() {
    this._service.crowdApplist$.subscribe(res => {
      if (res.datas) {
        this.activeDatas = res.datas.activeDatas.datas;
      }
    });
  }

}
