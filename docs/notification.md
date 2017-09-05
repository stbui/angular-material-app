# 通知组件

```
import { NotificaitonModule } from '../component/index';

@NgModule({
  imports: [
    NotificaitonModule.forRoot()
  ], 
  ...
})
class MainModule {}
```

```
import { NotificationService } from '../../component/index';

...

export class PopoverComponent implements OnInit {

  constructor(private _notification: NotificationService) {
  }

  show() {
    this._notification.show('测试消息', '测试标题');
  }

  clear() {
    this._notification.clear();
  }

}

```
