import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit{

  constructor(private seo: SeoService){}
 
  ngOnInit(): void {
    this.seo.updateTitle('404 | Page Not Found');
    this.seo.updateDescription('The page you are looking for might have been removed');
    this.seo.updateOgTitle('404 | Page Not Found');
    this.seo.updateOgDescription('The page you are looking for might have been removed');
  }

}
