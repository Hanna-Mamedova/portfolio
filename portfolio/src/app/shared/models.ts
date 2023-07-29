export interface Technologies {
  [index: string]: string[]
}

export interface Project {
  id: number;
  name: string;
  tooltip: string;
  image: string;
  description: string;
  deployLink: string;
  team: string;
  technologies: Technologies,
  personalImpact: string[];
}
