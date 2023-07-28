import { Position } from "./helpers";

export interface Project {
  id: number;
  cols: number;
  rows: number;
  tooltip: string;
  backgroundImage: string;
  position: Position;
}

export interface Technologies {
  [index: string]: string[]
}

export interface ProjectInfo {
  id: number;
  name: string;
  image: string;
  description: string;
  deployLink: string;
  team: string;
  technologies: Technologies,
  personalImpact: string[];
}
