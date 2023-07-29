import { Position } from "./helpers";

export interface Technologies {
  [index: string]: string[]
}

export interface Project {
  id: number;
  name: string;
  tooltip: string;
  cols: number;
  rows: number;
  image: string;
  position: Position;
  description: string;
  deployLink: string;
  team: string;
  technologies: Technologies,
  personalImpact: string[];
}
