import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  brand: string = 'stbui';
  year: string = '2017';

  constructor() {
  }

  ngOnInit() {

  }
}
