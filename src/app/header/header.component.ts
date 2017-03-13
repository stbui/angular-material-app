import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  classes: any = {};

  constructor(private _headerService: HeaderService) {
  }

  ngOnInit() {
    // console.log(_headerService)
  }

  getTheme() {
    return this._headerService.getTheme();
    //
    // return this.classes = {
    //   'bg-light': false,
    //   'bg-dark': true,
    //   'bg-primary': false,
    //   'bg-success': false,
    //   'bg-info': false,
    //   'bg-warning': false,
    //   'bg-danger': false
    // };
  }

}
