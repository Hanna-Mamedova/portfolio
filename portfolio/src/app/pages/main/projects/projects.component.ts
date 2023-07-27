import { Component } from '@angular/core';
import { Color, Position } from 'src/app/utils/helpers';
import { Project } from 'src/app/utils/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {text: 'Task Manager', cols: 5, rows: 1, color: 'lightblue', backgroundImage: "/assets/project management.png", position: Position.above},
    {text: 'Finscraper', cols: 3, rows: 1, color: 'lightgreen', backgroundImage: "/assets/finscraper.png", position: Position.above},
    {text: 'GraphQL Playground', cols: 3, rows: 1, color: 'lightpink', backgroundImage: "/assets/graphql.png", position: Position.below},
    {text: 'Management System Dashboard', cols: 5, rows: 1, color: '#DDBDF1', backgroundImage: "/assets/management system.png", position: Position.below},
  ];

  column = 8
  backgroundColor = Color.secondary
  toolTipDelay = 10000
}
