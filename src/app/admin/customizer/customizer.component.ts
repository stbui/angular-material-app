import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../core/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'stbui-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  settings: any;
  onSettingsChanged: Subscription;

  _colors: any = [
    'primary',
    'accent',
    'red',
    'blue',
    'orange',
    'material'
  ];

  constructor(private config: ConfigService) {
    this.onSettingsChanged = this.config.onSettingsChanged.subscribe(settings => {
      this.settings = settings;
    });
  }

  ngOnInit() {

  }

  onSettingsChange() {
    this.config.setSettings(this.settings);
  }

}
