import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/shared/helpers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() color: string;
  logoColor: string = Color.white;
  burgerColor: string;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const currentRoute = this.route.snapshot.url.join('/');
    this.burgerColor = !currentRoute.includes('/main') ? Color.primary : Color.white;
  }

  redirectTo(anchor: string) {
    this.router.navigateByUrl('/main').then(() => {
      this.viewportScroller.scrollToAnchor(anchor);
    });
  }
}
