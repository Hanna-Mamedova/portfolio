import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/models';
import { projects } from 'src/app/shared/projects.data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  id: string
  currentProject: Project
  technologyHeadings: string[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.currentProject = projects.find(projects => projects.id === +this.id) as Project;
    this.technologyHeadings = Object.keys(this.currentProject.technologies);
  }

}
