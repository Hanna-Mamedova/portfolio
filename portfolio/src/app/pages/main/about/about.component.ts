import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  scroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
