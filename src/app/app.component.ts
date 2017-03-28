import { Component } from '@angular/core';
import { CustomizerService } from './customizer/customizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CustomizerService ]
})
export class AppComponent {

  theme: string = 'bg-success';
  title = 'angular2 material2 web';

  onThemeChanges(theme) {
    this.theme = theme;
  }
}
