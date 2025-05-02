import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SeoService } from './services/seo.service';
import { filter, map, mergeMap } from 'rxjs';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'calton datx';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private seoService: SeoService) {}

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
      this.seoService.updateTitle(data['title']);
      this.seoService.updateDescription(data['description']);
    });

    // Always start from the top of the page after reload
    window.scrollTo(0,0);
  }
}