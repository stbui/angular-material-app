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
  isChecked: boolean = false;
  colorOptions;

  constructor(private _customizerService: CustomizerService) { }

  ngOnInit() {
    this.colorOptions = this._customizerService.getTheme();
  }

  toggleQuickview() {
    this.isOpen = this._customizerService.toggleQuickview();
  }

  onClick(theme) {
    this.themeChanges.emit(theme);
  }
}
