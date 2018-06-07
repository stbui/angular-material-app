# css

### 主题

> 内置主题:

```
stbui-background-primary
stbui-background-accent
stbui-background-warn
stbui-background-red
stbui-background-pink
stbui-background-purple
stbui-background-deep-purple
stbui-background-indigo
stbui-background-blue
stbui-background-light-blue
stbui-background-cyan
stbui-background-teal
stbui-background-green
stbui-background-light-green
stbui-background-lime
stbui-background-yellow
stbui-background-amber
stbui-background-orange
stbui-background-deep-orange
stbui-background-brown
stbui-background-grey
stbui-background-blue-grey
stbui-background-white
stbui-background-black
stbui-background-dark
stbui-background-material
```

> 修改默认主题:

/src/app/core/config.service.ts
```
constructor() {
    this.defaultSettings = {
        colorClasses: {
            header: 'stbui-background-white',
            footer: 'stbui-background-blue',
            brand: 'stbui-background-blue',
            navigation: 'stbui-background-dark'
        },
        layout: {
            mode: 'fullwidth',
            navigation: 'left',
            header: 'below',
            footer: 'below'
        }
    };
    ...
}
```
