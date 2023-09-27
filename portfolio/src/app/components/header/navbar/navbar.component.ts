import { ViewportScroller } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'src/app/shared/helpers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() color: string;
  logoColor: string = Color.white;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  redirectTo(anchor: string) {
    this.router.navigateByUrl('/main').then(() => {
      this.viewportScroller.scrollToAnchor(anchor);
    });
  }
}
