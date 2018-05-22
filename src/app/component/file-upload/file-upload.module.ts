/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { FileUploadService } from './file-upload.service';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadDirective, FileUploadDropDirective } from './file-upload.directive';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  declarations: [FileUploadDirective, FileUploadDropDirective, FileUploadComponent, FileSizePipe],
  exports: [FileUploadDirective, FileUploadDropDirective, FileUploadComponent],
  providers: [FileUploadService]
})
export class FileUploadModule {}
