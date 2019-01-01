import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, Renderer2, HostBinding } from '@angular/core'

@Component({
  selector: 'apm-script-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  host: {
    '[class.mat-elevation-z8]': 'true'
  }
})
export class DetailComponent implements OnInit {

  @Input()
  set opened(val) {
    this.open = val;
  }
  get opened() {
    return this.open;
  }

  @Output() onOpened = new EventEmitter();
  @ViewChild('overlay') overlay: ElementRef;
  @HostBinding('class.open') open: boolean;

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2
  ) {
    this.open = true;
  }

  ngOnInit() {
    // this._renderer.listen(this._element.nativeElement, 'click', () => {
    //   this.onCloseTriggered();
    // });
  }

  onCloseTriggered() {
    this.open = false;
    this.onOpened.emit(this.open);
  }

}
