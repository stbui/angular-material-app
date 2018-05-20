import { Component } from '@angular/core';
import { FileManagerFirebase } from './file-manager.firebase';

@Component({
  selector: 'stb-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent {
  files;

  constructor(private service: FileManagerFirebase) {
    let f = this.service.getFilesList();
    f.subscribe(files => {
      console.log(files);
      this.files = files;
    });
  }
}
