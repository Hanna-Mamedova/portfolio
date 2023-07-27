import { Component, OnInit } from '@angular/core';

enum Position {
  above = "above",
  below = "below",
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  backgroundImage: string;
  position: Position;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Task Manager', cols: 5, rows: 1, color: 'lightblue', backgroundImage: "/assets/project management.png", position: Position.above},
    {text: 'Finscraper', cols: 3, rows: 1, color: 'lightgreen', backgroundImage: "/assets/finscraper.png", position: Position.above},
    {text: 'GraphQL Playground', cols: 3, rows: 1, color: 'lightpink', backgroundImage: "/assets/graphql.png", position: Position.below},
    {text: 'Management System Dashboard', cols: 5, rows: 1, color: '#DDBDF1', backgroundImage: "/assets/management system.png", position: Position.below},
  ];

  column = 8
  backgroundColor = '#F2F2FF'
  toolTipDelay = 10000
}
