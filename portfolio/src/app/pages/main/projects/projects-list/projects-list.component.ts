import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PassChosenFiltersService } from 'src/app/services/pass-chosen-filters.service';
import { Color } from 'src/app/shared/helpers';
import { projects } from 'src/app/shared/projects.data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  column = 8;
  currentProjects = projects;
  backgroundColor = Color.secondary;
  subscription: Subscription;

  constructor(
    private router: Router,
    private passFiltersService: PassChosenFiltersService,
  ) {}

  ngOnInit() {
    this.subscription = this.passFiltersService.currentFilters.subscribe((filters) => {
      const filteredProjects = projects.filter((project) => {
        return filters?.some((filter) => project.technologies['core'].includes(filter));
      });
      this.currentProjects = filteredProjects.length ? filteredProjects : projects;
    });
  }

  getColspan(i: number): number {
    if (window.innerWidth < 800) {
      return 8;
    }

    return Math.floor(i / 2) % 2 === 0 ? (i % 2 === 0 ? 5 : 3) : i % 2 === 0 ? 3 : 5;
  }

  showProjectInfo(id: number): void {
    this.router.navigate(['/project', id]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
