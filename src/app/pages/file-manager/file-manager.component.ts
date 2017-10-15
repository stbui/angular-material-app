import { Component } from '@angular/core';

@Component({
  selector: 'stb-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent {
  files = {
    datas: [
      {
        icon: 'folder',
        name: 'main',
        type: 'js',
        provide: 'stbui',
        size: '10k',
        lastModifiedDate: '20171014'
      },
      {
        icon: 'folder',
        name: 'vendor',
        type: 'js',
        provide: 'stbui',
        size: '10k',
        lastModifiedDate: '20171014'
      },
      {
        icon: 'folder',
        name: 'polyfills',
        type: 'js',
        provide: 'stbui',
        size: '10k',
        lastModifiedDate: '20171014'
      }
    ]
  };
}
