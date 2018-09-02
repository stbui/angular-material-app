import { Component, OnInit } from '@angular/core';
// rest
// import { BlogService } from './blog.service';
// graphql
import { BlogService } from './blog.grahql';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  items: any = [];

  constructor(private service: BlogService) {}

  // graphql
  ngOnInit() {
    this.service.getIssues().subscribe(items => {
      this.items = items.issues.edges.map(item => {
        return {
          title: item.node.title,
          body: item.node.body,
          updated: item.node.updatedAt
        };
      });
    });
  }

  // rest
  // ngOnInit() {
  //   this.service.getIssues().subscribe(items => {
  //     this.items = items;
  //   });
  // }
}
