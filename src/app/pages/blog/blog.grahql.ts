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

  getDetail(id: number) {}
}
