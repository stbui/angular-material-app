/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Upload } from './file-upload.model';

@Injectable()
export class FileUploadService {
  files;
  accept;
  maxSize;
  previewUrl: SafeUrl;
  action: string = '';

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  startUpload(event) {
    const files = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files;

    for (const file of files) {
      if (this.isImage(file)) {
        this.previewUrl = this.createURL(file);
      }

      this.upload(file);
    }
  }

  upload(file) {
    const url = this.action;
    const formData = new FormData();
    formData.append(file.name, file, file.name);
    this.http.post(url, formData);
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
