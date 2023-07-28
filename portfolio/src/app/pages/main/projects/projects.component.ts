import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'src/app/utils/helpers';
import { projects } from 'src/app/utils/projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  column = 8
  backgroundColor = Color.secondary
  toolTipDelay = 10000
  projects = projects;

  constructor(private router: Router) {}

  showProjectInfo(id: number) {
    this.router.navigate(['/project', id]);
  }
}
