### Popover

```
<stbui-popover #popover="stbuiPopover">
  <stbui-github-button></stbui-github-button>
</stbui-popover>
```

```
<button mat-icon-button [popoverTriggerFor]="popover">
  <mat-icon>grade</mat-icon>
</button>
<stbui-popover #popover>
  <stbui-github-button></stbui-github-button>
</stbui-popover>
```

horizontalPosition
    * before
    * start
    * center
    * end
    * after

verticalPosition
    * above
    * start
    * center
    * end
    * below