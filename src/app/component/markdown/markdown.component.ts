import { Component, Output, Input, EventEmitter } from '@angular/core';
import * as markdown from 'markdown-it';

@Component({
  selector: 'stbui-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent {

  private renderer = markdown();
  private inputValue: string = '';
  private _source:string = '';

  @Output() onMarkDown = new EventEmitter();
  @Input() width: string = '';
  @Input() height: string = '';
  @Input()
  set source(value) {
    this._source = this.renderMarkDown(value);
  }

  get source() {
    return this._source;
  }

  constructor() {
  }

  keyUp() {
    this.onMarkDown.emit(this.renderMarkDown(this.inputValue));
  }

  renderMarkDown(source) {
    return this.renderer.render(source);
  }

  getMarkDown() {
    return {
      width: this.width,
      height: this.height
    };
  }

}
