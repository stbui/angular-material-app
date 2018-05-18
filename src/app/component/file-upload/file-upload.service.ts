import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Upload } from './file-upload.model';

@Injectable()
export class FileUploadService {
  private basePath = 'uploads';
  uploadsRef: AngularFireList<Upload>;
  uploads: Observable<any>;

  constructor(private db: AngularFireDatabase) {}

  getUploads() {
    this.uploads = this.db
      .list(this.basePath)
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.val();
            const $key = a.payload.key;
            return { $key, ...data };
          })
        )
      );

    return this.uploads;
  }

  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`${this.basePath}/${upload.file.name}`)
      .put(upload.file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        const snap = snapshot;
        upload.progress = snap.bytesTransferred / snap.totalBytes * 100;
      },
      error => {
        console.log(error);
      },
      () => {
        if (uploadTask.snapshot.downloadURL) {
          upload.url = uploadTask.snapshot.downloadURL;
          upload.name = upload.file.name;
          this.saveFileData(upload);
          return;
        } else {
          console.error('下载地址不存在！');
        }
      }
    );
  }

  deleteUpload(upload: Upload) {
    this.deleteFileStorage(upload.name);
  }

  private saveFileData(upload: Upload) {}

  private deleteFileData() {}

  private deleteFileStorage(name) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}
