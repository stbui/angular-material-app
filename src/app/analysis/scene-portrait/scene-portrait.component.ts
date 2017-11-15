import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-scene-portrait',
  templateUrl: './scene-portrait.component.html',
  styleUrls: ['./scene-portrait.component.scss']
})
export class ScenePortraitComponent implements OnInit {

  bubble: any = [];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(@Inject('AnalysisService') private _service) {
  }

  ngOnInit() {
    this._service.scenesData();
    this.scenes();
  }

  scenes() {
    this._service.scenes$.subscribe(res => {
      if (res.datas) {

      }
    });
  }

}
