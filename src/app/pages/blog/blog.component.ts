import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  items: any = [];

  constructor(private service: BlogService) {}

  ngOnInit() {
    this.service.getIssues().subscribe(items => {
      this.items = items;
    });
  }
}
