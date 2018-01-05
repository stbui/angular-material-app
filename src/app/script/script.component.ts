import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import userAgent from './user-agent';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.scss']
})
export class ScriptComponent implements OnInit {

  rows: any[];
  loadingIndicator = true;
  reorderable = true;

  selected = [];
  openDetial = false;
  detail;


  @HostListener('document:click', ['$event', '$event.target']) onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside && this.openDetial === true) {
      this.openDetial = false;
    }
  }

  constructor(private _elementRef: ElementRef) {
  }

  ngOnInit() {

    let a = [{
      notifierVersion: '2.5.0',
      apiKey: 'qetBqF9Ja3v2oU8BRRzoLlWaKj0cFiN9',
      projectRoot: 'http://127.0.0.1:4200',
      context: '/script',
      'metaData[script][src]': '',
      'metaData[script][content]': ');',
      releaseStage: 'production',
      url: 'http://127.0.0.1:4200/script',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
      language: 'zh-CN',
      severity: 'error',
      name: 'SyntaxError',
      message: 'Uncaught SyntaxError: Unexpected token )',
      stacktrace: 'SyntaxError: Unexpected token )',
      file: 'http://127.0.0.1:4200/script',
      lineNumber: '32',
      columnNumber: '5',
      payloadVersion: '2',
      ct: 'img',
      cb: '1515067499207',
    }];

    //
    a[0]['device'] = userAgent(a[0].userAgent);

    this.rows = a;

    this.loadingIndicator = false;
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  onSelect({selected}) {
    console.log('Select Event', selected);
    this.selected = selected;
    this.detail = selected[0];
    this.openDetial = true;
  }

  getRowClass(row) {
    return {
      'row-selected': true
    };
  }

}
