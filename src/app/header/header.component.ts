import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() theme: any;

  classes: any = {};

  constructor(private _headerService: HeaderService) {
  }

  ngOnInit() {
  }

}
