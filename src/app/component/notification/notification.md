### Opening a notification
```ts
notification.open('message', 'title');
```

```ts
notification.afterClosed().subscribe((result) => {
  console.log('The notification was closed');
});

notification.close()
```

```ts
notification.open('message','title', {
  duration: 3000
});
```