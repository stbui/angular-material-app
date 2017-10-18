import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Upload } from './file-upload.model';

@Injectable()
export class FileUploadService {

  private basePath: string = '/uploads';
  uploadsRef: AngularFireList<Upload>;
  uploads: Observable<Upload[]>;

  constructor(private db: AngularFireDatabase) {
  }

  getUploads(query = {}) {
    this.uploads = this.db.list(this.basePath).valueChanges();

    return this.uploads;
  }

  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
      let snap = snapshot as firebase.storage.UploadTaskSnapshot;
      upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
    }, (error) => {
      console.log(error);
    }, () => {
      upload.url = uploadTask.snapshot.downloadURL;
      upload.name = upload.file.name;
      this.saveFileData(upload);
      return undefined;
    });
  }

  deleteUpload(upload: Upload) {
    this.deleteFileStorage(upload.name);
  }

  private saveFileData(upload: Upload) {

  }

  private deleteFileData() {

  }

  private deleteFileStorage(name) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }

}
