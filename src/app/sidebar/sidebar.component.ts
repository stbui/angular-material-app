import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { CustomizerService } from '../customizer/customizer.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() theme: any;
  classes: any = {};
  isMenuOpen: boolean= false;

  constructor(
    private _headerService: HeaderService,
    private _customizerService: CustomizerService
  ) { }

  ngOnInit() {
  }

  setTheme() {
    return this._headerService.getTheme();
  }

  toggleQuickview() {
    this._customizerService.toggleQuickview();
    console.log(this);
  }

  toggleMenu(value) {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(value)
  }
}
