import { Component, OnInit } from '@angular/core';
import { CustomizerService } from './customizer.service';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  isOpen: boolean = false;
  colorOption;

  constructor(private _customizerService: CustomizerService) { }

  ngOnInit() {
  }

  toggleQuickview() {
    this.isOpen = this._customizerService.toggleQuickview();
    console.log(this);
  }

}
