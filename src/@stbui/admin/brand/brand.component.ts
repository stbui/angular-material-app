import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stbui-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  @Input() brand: string = 'Stbui';
  @Input() link: any = ['/'];

  constructor() {}

  ngOnInit() {}
}
