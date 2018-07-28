import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  private _files$: BehaviorSubject<any> = new BehaviorSubject([]);

  files: any[] = [
    {
      icon: 'folder',
      lastModifiedDate: +new Date(),
      name: 'main',
      provide: 'stbui',
      size: 1024,
      type: 'js',
      $key: '-KwjG2oUgNs_r3Tlep4Y'
    },
    {
      icon: 'folder',
      lastModifiedDate: +new Date(),
      name: 'vendor',
      provide: 'stbui',
      size: 1024,
      type: 'js',
      $key: '-KwjGAfs5yhWDNa1CScK'
    },
    {
      icon: 'folder',
      lastModifiedDate: +new Date(),
      name: 'vendor',
      provide: 'stbui',
      size: 1024,
      type: 'js',
      $key: '-KwjGAfs5yhWDNa1CScK'
    },
    {
      icon: 'folder',
      lastModifiedDate: +new Date(),
      name: 'polyfills',
      provide: 'stbui',
      size: 1024,
      type: 'js',
      $key: '-KwjGRGOXnCvVrsmSpNj'
    }
  ];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.files.push({
        icon: 'folder',
        lastModifiedDate: +new Date(),
        name: 'name' + i,
        provide: 'stbui',
        size: 1024,
        type: 'js',
        $key: '-KwjGAfs5yhWDNa1CScK'
      });
    }
    this._files$.next(this.files);
  }

  getFilesList() {
    return this._files$;
  }
}
