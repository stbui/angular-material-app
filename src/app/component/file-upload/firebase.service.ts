/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map, tap, finalize } from 'rxjs/operators';
import { FileUploadRef } from './file-upload.ref';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  files = [];
  accept;
  maxSize;
  previewUrl: SafeUrl;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadUrl: Observable<string>;
  private basePath = 'uploads';

  constructor(
    private sanitizer: DomSanitizer,
    private db: AngularFireDatabase,
    private storge: AngularFireStorage
  ) {}

  startUpload(event) {
    const files = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files;

    for (const file of files) {
      if (this.isImage(file)) {
        this.previewUrl = this.createURL(file);
      }

      this.files.push(file);
      this.upload(file);
    }

    const ref = new FileUploadRef(files);
    return ref;
  }

  upload(file) {
    const path = `${this.basePath}/${new Date().getTime()}_${file.name}`;
    this.task = this.storge.upload(path, file);
    this.percentage = this.task.percentageChanges();
    return (this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          // save database
        }
      }),
      finalize(() => {
        console.log(this.storge.ref(path).getDownloadURL());
      })
    ));
  }

  isImage(file: File): boolean {
    return /^image\//.test(file.type);
  }

  private createURL(file: any): SafeUrl {
    const url = window.URL.createObjectURL(file);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  private createDataURL(file) {
    const fr = new FileReader();
    fr.readAsDataURL(file);
  }
}
