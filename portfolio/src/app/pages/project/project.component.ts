import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectInfo, Technologies } from 'src/app/utils/models';
import { projectsInfo } from 'src/app/utils/projects.data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  id: string
  currentProject: ProjectInfo
  technologyHeadings: string[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.currentProject = projectsInfo.find(projectInfo => projectInfo.id === +this.id) as ProjectInfo;
    this.technologyHeadings = Object.keys(this.currentProject.technologies);
  }

}
