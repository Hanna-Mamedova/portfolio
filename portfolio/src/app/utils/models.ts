import { Position } from "./helpers";

export interface Project {
  id: number;
  cols: number;
  rows: number;
  tooltip: string;
  backgroundImage: string;
  position: Position;
}
