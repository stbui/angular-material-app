import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Upload } from './file-upload.model';

@Injectable()
export class FileUploadService {

  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<Upload[]>;

  constructor(private db: AngularFireDatabase) { }

  getUploads(query={}) {
    this.uploads = this.db.list(this.basePath, {query: query});

    return this.uploads;
  }

  pushUpload(upload:Upload) {
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

  deleteUpload(upload:Upload) {
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
