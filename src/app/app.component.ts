import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Event, NavigationEnd, Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('scrollContent') scrollContent?: ElementRef;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((evt) => {
      if((evt instanceof NavigationEnd)) {
        this.scrollCotentTop();
        return;
      }
    });
  }

  scrollCotentTop() {
    if(this.scrollContent) {
      const div: HTMLDivElement = this.scrollContent?.nativeElement;
      div.scrollTo(0, 0);
    }
  }
}
