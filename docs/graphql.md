# Angular+Github+Graphql 开发博客系统

Graphql 本身是一种全新的数据通信格式.
Github 的 Graphql API 只有一个接口：[https://api.github.com/graphql](https://api.github.com/graphql)
我们只需要向这个接口发送我们指定的查询条件，就可以得到我们需要的各种数据：

```javascript
{
  repository(owner: "stbui", name: "blog") {
    issues(last:20,states:OPEN) {
      edges {
        node {
          title
          url
          body
          updatedAt
        }
      }
    }
  }
}
```

上面这段代码，就是 Graphql 的查询条件，获取 stbui 用户下 blog 仓库中 issues。

# Angular

使用 angular cli 添加 apollo-angular

```
ng add apollo-angular
```

安装完之后自动在 angular.json 中添加 esnext.asynciterable

```diff
{
  ...
    "lib": [
      "es2017",
      "dom",
+      "esnext.asynciterable"
    ]
  }
}
```

然后通过 npm 安装 graphql 相关依赖

```
npm i --save apollo-client apollo-cache-inmemory apollo-angular-link-http apollo-angular graphql-tag graphql
```

在项目中导入 Apollo 模块，将调用 github 接口的 uri 和 Authorization 授权封装在模块中，然后导出模块

```js
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';

// github 接口
const uri = 'https://api.github.com/graphql';

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((op, ctx) => ({
    headers: new HttpHeaders().set('Accept', 'charset=uf-8')
  }));

  // 设置请求头中需要验证token
  const auth = setContext((operation, ctx) => ({
    headers: ctx.headers.append(
      'Authorization',
      `Bearer 92ad2f89a0eaa8693abdf05d5d4889c70873491b`
    )
  }));

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);

  return {
    link,
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [HttpClientModule, ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
```

在对于的模块下创建 service 来处理 graphql 返回过来的数据，供组件调用

```js
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Query } from './types';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private apollo: Apollo) {}

  // 获取issues下的数据
  getIssues(): Observable<any> {
    return this.apollo
      .watchQuery<Query>({
        query: gql`
          query {
            repository(owner: "stbui", name: "blog") {
              issues(last: 20, states: OPEN) {
                edges {
                  node {
                    title
                    url
                    body
                    updatedAt
                  }
                }
              }
            }
          }
        `,
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map(result => result.data.repository));
  }
}
```

关于 GraphQL 的完整语义文档，可以参看 GitHub 官方的说明：[https://developer.github.com/v4/](https://developer.github.com/v4/)。

## 参考资源

- https://github.com/apollographql/apollo-angular
- https://launchpad.graphql.com/
