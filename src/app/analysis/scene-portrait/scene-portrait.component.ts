import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-scene-portrait',
  templateUrl: './scene-portrait.component.html',
  styleUrls: ['./scene-portrait.component.scss']
})
export class ScenePortraitComponent implements OnInit {

  bubbleChartData = [{
    data: [
      {x: 20, y: 30, r: 15},
      {x: 40, y: 10, r: 10}
    ],
    label: '教育学习',
    backgroundColor: '#FF6384',
    hoverBackgroundColor: '#FF6388'
  },
    {
      data: [
        {x: 12, y: 17, r: 20},
        {x: 64, y: 17, r: 10}
      ],
      label: '日常消费',
      backgroundColor: '#40ff00',
      hoverBackgroundColor: '#FF6388'
    }];
  // bubbleChartData = [{data: [], label: '', backgroundColor: '', hoverBackgroundColor: ''}];
  bubbleChartLabels: string[] = ['教育学习', '日常消费'];
  bubbleChartOptions: any = {};
  bubbleChartLegend: string[] = [];
  bubbleChartType: string = 'bubble';

  constructor(@Inject('AnalysisService') private _service) {
  }

  ngOnInit() {
    this.scenes();
  }

  scenes() {
    this._service.scenesData();
    this._service.scenes$.subscribe(res => {
      if (!res.scene) {
        return;
      }
      let d = [];
      console.log(res.scene.ratioSort);
      res.scene.ratioSort.map(item => {
        d.push({
          data: [
            {x: item.tgi.toFixed(2), y: item.activeNums.toFixed(2), r: 15},
          ],
          label: item.scenName,
          backgroundColor: '#FF6384',
          hoverBackgroundColor: '#FF6388'
        });
      });

      console.log(d);
    });
  }

}
