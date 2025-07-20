import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SeoService } from './services/seo.service';
import { filter, map, mergeMap } from 'rxjs';
import { HeaderComponent } from './component/header/header.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'calton datx';

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private seoService: SeoService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    // SEO
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while(route.firstChild) route = route.firstChild
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    ).subscribe((data) => {
      //Update Meta Tag Content - title, description including OG for SEO
      this.seoService.updateTitle(data['title']);
      this.seoService.updateDescription(data['description']);
      this.seoService.updateOgUrl(data['title']);
      this.seoService.updateOgDescription(data['description']);
      this.seoService.updateOgTitle(data['title']);
    });

    // Always start from the top of the page after reload
    this.viewportScroller.scrollToPosition([0,0])
  }
}