import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomizerService } from './customizer.service';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  @Output() themeChanges = new EventEmitter<any>()

  isOpen: boolean = false;
  colorOption;

  constructor(private _customizerService: CustomizerService) { }

  ngOnInit() {
  }

  toggleQuickview() {
    this.isOpen = this._customizerService.toggleQuickview();
  }

  colorOptions() {
    return this._customizerService.getTheme();
  }


  onClick() {
    console.log(this.colorOption);
    let theme = {
      header:'bg-dark',
      logo:'bg-dark',
      slider:'bg-dark'
    }

    this.themeChanges.emit(theme);
  }
}
