import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  horizontalAlign = 'after';
  verticalAlign = 'center';
  margin = 0;
  forceAlignment = false;
  lockAlignment = false;

  strategy = 'reposition';
  scrollOptions = [
    { value: 'noop', name: 'Do nothing' },
    { value: 'block', name: 'Block scrolling' },
    { value: 'reposition', name: 'Reposition on scroll' },
    { value: 'close', name: 'Close on scroll' },
    { value: 'rugrats', name: 'Invalid option' }
  ];

  constructor() {}

  ngOnInit() {}
}
