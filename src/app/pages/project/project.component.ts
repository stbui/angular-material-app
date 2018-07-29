import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'stb-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: any;

  constructor(private service: ProjectService) {}
  ngOnInit() {
    this.service.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
}
