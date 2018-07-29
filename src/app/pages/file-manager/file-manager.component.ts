import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileManagerFirebase } from './file-manager.firebase';
import { FileManagerService } from './file-manager.service';

@Component({
  selector: 'stb-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit, OnDestroy {
  files: any;
  fileSelected: any[] = [];

  constructor(private service: FileManagerService) {}

  ngOnInit() {
    this.service.getFilesList().subscribe(files => {
      this.files = files;
    });
  }

  ngOnDestroy() {}

  onShareTrigger() {
    console.log(this.fileSelected);
  }

  onDownLoadTrigger() {
    console.log(this.fileSelected);
  }

  onDeleteTrigger() {
    console.log(this.fileSelected);
  }

  onCheckBoxAllTrigger({ checked }) {
    if (checked) {
      this.fileSelected = this.files;
    } else {
      this.fileSelected = [];
    }
  }

  onCheckBoxTrigger({ checked }, file) {
    if (checked) {
      this.fileSelected.push(file);
    } else {
      this.fileSelected = this.fileSelected.filter(source => source !== file);
    }
  }
}
