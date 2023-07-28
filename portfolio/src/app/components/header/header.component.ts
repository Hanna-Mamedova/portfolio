import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, switchMap } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll.service';
import { Color } from 'src/app/shared/helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  logoColor: string = Color.primary
  navBarColor: string = Color.white
  isScrolled: boolean
  currentRoute: string

  private subscription: Subscription;

  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit() {
    this.subscription = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      switchMap((event: NavigationEnd) => {
        this.currentRoute = event.url;
        return this.scrollService.isScrolled;
      })
    ).subscribe(isScrolled => {
      this.isScrolled = isScrolled;
      this.logoColor = isScrolled ? Color.white : Color.primary;
      if ( !this.currentRoute.includes('/main')) {
        this.navBarColor = isScrolled ? Color.white : Color.primary;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
