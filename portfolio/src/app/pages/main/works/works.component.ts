import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 5, rows: 1, color: 'lightblue', backgroundImage: "/assets/project management.png"},
    {text: 'Two', cols: 3, rows: 1, color: 'lightgreen', backgroundImage: "/assets/finscraper.png"},
    {text: 'Three', cols: 3, rows: 1, color: 'lightpink', backgroundImage: "/assets/graphql.png"},
    {text: 'Four', cols: 5, rows: 1, color: '#DDBDF1', backgroundImage: "/assets/management system.png"},
  ];

  column = 8
  backgroundColor = '#F2F2FF'

  constructor() { }

  ngOnInit(): void {
  }

}
