# Dialog

```
import { DialogService } from '../../component/dialog';

constructor(private dialog: DialogService) {}

this.dialog.alert({
    title: 'title',
    message: 'message',
    closeButton: '确定'
});

this.dialog.confirm({
    title: 'title',
    message: 'message',
    cancelButton: '取消',
    acceptButton: '确定'
});
```
