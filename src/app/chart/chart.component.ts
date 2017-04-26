import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import * as echarts from "echarts";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() width: string = '600px';
  @Input() height: string = '400px';

  @ViewChild('chart') chart: ElementRef;

  ngOnInit() {
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: ''
      },
      tooltip: {},
      legend: {
        data:['销量']
      },
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };

    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(this.chart.nativeElement);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  getEchartsStyles() {
    return {
      width: this.width,
      height: this.height
    };
  }

}
