import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'stbui-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  @Input() overlay:boolean = false;
  @Input() overlayOpacity:number = 0.01;
  @Input() overlayColor:string = '#000';
  @Input() targetOrigin = {vertical: 'top',horizontal: 'left'};
  @Input() anchorOrigin = {vertical: 'bottom',horizontal: 'left'};
  @Input() autoPosition = true;
  @Input() open = false;
  @Input() trigger;

  @Output() close = new EventEmitter();
  @Output() show = new EventEmitter();
  @Output() hide = new EventEmitter();

  getAnchorPosition() {

  }

  getTargetPosition() {

  }

  setStyle() {
    return {
      top:'180px',
      left:'110px'
    }
  }

  getPositions() {

  }

  constructor() { }

  ngOnInit() {
  }

}
