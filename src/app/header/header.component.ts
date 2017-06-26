import { Component, OnInit, Input,} from '@angular/core';
import * as screenfull from 'screenfull';


@Component({
  selector: 'stbui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() theme:any;
  @Input() customizer;
  isFullscreen:boolean = false;

  classes:any = {};

  constructor() {
  }

  ngOnInit() {
  }

  toggleFullscreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }

}
