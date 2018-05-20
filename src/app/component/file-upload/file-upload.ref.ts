import { Observable, Subject } from 'rxjs';

export class FileUploadRef {
  private readonly _afterUpload = new Subject<void>();

  constructor(files) {
    this._afterUpload.next(files);
    this._afterUpload.complete();
  }

  afterUpload(): Observable<void> {
    return this._afterUpload.asObservable();
  }
}
