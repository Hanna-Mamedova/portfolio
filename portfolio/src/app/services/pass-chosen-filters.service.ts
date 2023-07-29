import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassChosenFiltersService {
  private chosenFilters = new BehaviorSubject<string[] | null>(null);
  currentFilters = this.chosenFilters.asObservable();

  constructor() { }

  passFilters(filters: string[]) {
    this.chosenFilters.next(filters);
  }
}
