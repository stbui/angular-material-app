import { Component } from '@angular/core';
import { FileManagerFirebase } from './file-manager.firebase';
import { FileManagerService } from './file-manager.service';

@Component({
  selector: 'stb-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent {
  files;
  checkboxSelection: any[] = [];

  constructor(private service: FileManagerService) {
    this.service.getFilesList().subscribe(files => {
      this.files = files;
    });
  }

  onShareTrigger() {
    console.log(this.checkboxSelection);
  }

  onDownLoadTrigger() {
    console.log(this.checkboxSelection);
  }

  onDeleteTrigger() {
    console.log(this.checkboxSelection);
  }

  onCheckBoxAllTrigger({ checked }) {
    if (checked) {
      this.checkboxSelection = this.files;
    } else {
      this.checkboxSelection = [];
    }
  }

  onCheckBoxTrigger({ checked }, file) {
    if (checked) {
      this.checkboxSelection.push(file);
    } else {
      this.checkboxSelection = this.checkboxSelection.filter(
        source => source !== file
      );
    }
  }
}
