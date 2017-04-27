export class Chat {
  picture: string;
  name: string;
  messages: any[];

  constructor(model: any = null) {
    this.picture = model.picture;
    this.name = model.name;
    this.messages = model.messages;
  }
}
