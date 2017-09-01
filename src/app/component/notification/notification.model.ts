export class NotificationModel {

  constructor(public id: number,
              public message: string | null | undefined,
              public title: string | undefined) {

  }
}
