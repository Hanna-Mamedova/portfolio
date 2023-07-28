import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private _isScrolled = new BehaviorSubject<boolean>(false);

  constructor() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (): void => {
    const number = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this._isScrolled.next(true);
    } else if (this.isScrolled && number < 10) {
      this._isScrolled.next(false);
    }
  }

  get isScrolled() {
    return this._isScrolled.asObservable();
  }
}
