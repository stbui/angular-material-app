import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private brand: string = "stbui";
  private year: string = "20170426"

  constructor() {
  }

  ngOnInit() {

  }

}
