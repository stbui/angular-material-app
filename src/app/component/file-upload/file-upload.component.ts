import { Component } from '@angular/core';
import { FileUploadDirective } from './file-upload.directive';

@Component({
  selector: 'stbui-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  currentUpload;

  constructor() {}

  uploader(event) {
    this.currentUpload = event;
  }
}
