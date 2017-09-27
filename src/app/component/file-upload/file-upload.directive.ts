import { Directive, Output, EventEmitter } from '@angular/core';
import { FileUploadService } from './file-upload.service';
import { Upload } from './file-upload.model';

@Directive({
  selector: '[stbFileUpload],[stbuiFileUpload]'
})
export class FileUploadDirective {

  selectedFiles: FileList;
  currentUpload: Upload;

  @Output() onUpload = new EventEmitter();

  constructor(private service: FileUploadService) { }


  detectFiles(event) {

  }

  uploadSingle() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.service.pushUpload(this.currentUpload);
  }

  uploadMulti() {

  }

}
