import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  items = [
    {
      name: 'JS',
      src: '/assets/skill-icons/js.png',
    },
    {
      name: 'TS',
      src: '/assets/skill-icons/ts.png',
    },
    {
      name: 'Angular',
      src: '/assets/skill-icons/angular.png',
    },
    {
      name: 'React',
      src: '/assets/skill-icons/react.png',
    },
    {
      name: 'Redux',
      src: '/assets/skill-icons/redux.png',
    },
    {
      name: 'Next.js',
      src: '/assets/skill-icons/next.png',
    },
    {
      name: 'Webpack',
      src: '/assets/skill-icons/webpack.png',
    },
    {
      name: 'HMTL',
      src: '/assets/skill-icons/html.png',
    },
    {
      name: 'CSS',
      src: '/assets/skill-icons/css.png',
    },
    {
      name: 'Bootstrap 5',
      src: '/assets/skill-icons/bootstrap.png',
    },
    {
      name: 'Material UI',
      src: '/assets/skill-icons/mui.png',
    },
    {
      name: 'Git',
      src: '/assets/skill-icons/git.png',
    },
    {
      name: 'AWS Services',
      src: '/assets/skill-icons/aws.png',
    },
  ];
}
