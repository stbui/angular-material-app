import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadDirective } from './file-upload.directive';

import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [CommonModule, AngularFireDatabaseModule],
  exports: [FileUploadDirective, FileUploadComponent],
  declarations: [FileUploadDirective, FileUploadComponent],
  providers: [FileUploadService]
})
export class FileUploadModule {}
