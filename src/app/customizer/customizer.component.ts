import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stbui-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  _theme = {
    dark: {
      header: 'stbui-white',
      aside: 'stbui-default',
      logo: 'stbui-default'
    },
    light: {
      header: 'stbui-white',
      aside: 'stbui-primary',
      logo: 'stbui-primary'
    },
    default: {
      header: 'stbui-white',
      aside: 'stbui-default',
      logo: 'stbui-default'
    },
    primary: {
      header: 'stbui-primary',
      aside: 'stbui-primary',
      logo: 'stbui-primary'
    },
    accent: {
      header: 'stbui-accent',
      aside: 'stbui-accent',
      logo: 'stbui-accent'
    },
    warn: {
      header: 'stbui-warn',
      aside: 'stbui-warn',
      logo: 'stbui-warn'
    }
  };

  @Output() theme = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selectTheme($event, type) {
    this.theme.emit(this._theme[type]);
  }
}
