import { Component } from '@angular/core';
import { CustomizerService } from './customizer/customizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CustomizerService ]
})
export class AppComponent {

  title = 'angular2 material2 web - Power by 码农庄园';

}
