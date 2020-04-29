import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';

const uri = 'https://api.github.com/graphql';

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((op, ctx) => ({
    headers: new HttpHeaders().set('Accept', 'charset=uf-8')
  }));

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
