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

### Theming
```ts
notification.success('message','title', {
  duration: 3000
});
notification.info('message','title', {
  duration: 3000
});
notification.warn('message','title', {
  duration: 3000
});
```