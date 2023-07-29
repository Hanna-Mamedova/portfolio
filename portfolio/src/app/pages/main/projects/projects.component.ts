import { Component, ViewChild } from '@angular/core';
import { MatChipListbox } from '@angular/material/chips';
import { PassChosenFiltersService } from 'src/app/services/pass-chosen-filters.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @ViewChild(MatChipListbox) chipList: MatChipListbox;

  toolTipDelay = 10000

  constructor(private passFiltersService: PassChosenFiltersService) {}

  onClick() {
    this.passFiltersService.passFilters(this.chipList.value);
  }
}
