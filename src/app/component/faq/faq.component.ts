import { Component, OnInit, signal } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { FAQ } from '../../interface';
import { NgFor, NgIf } from '@angular/common';
import { FaqsService } from '../../services/faqs/faqs.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionModule, AnimateOnScrollModule, NgFor, NgxSkeletonLoaderModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit{
  faqs!: FAQ[];
  loading = signal(true);

  constructor(private faqApi: FaqsService){}

  ngOnInit(): void {
    this.faqs = [
      {
        id : '1',
        question : `Waht types of data can Calton Datx capture?`,
        answer : `Calton Datx captures both people and vehicle metrics, including viewer engagement (OTS,
                  Watchers, Dwell Time), demographics (age, gender, emotion), vehicle traffic, impressions, and
                  campaign performance.`
      },
      {
        id : '2',
        question : `How accurate is the audience data?`,
        answer : `Calton Datx uses AI-powered analytics with up to 90% accuracy under optimal conditions—
                  clear visibility, no obstructions (like hats or glasses), and a 2–3 meter range.`
      },
      {
        id : '3',
        question : `Is Calton Datx compatible with any display setup?`,
        answer : `Yes. It supports outdoor LED screens, indoor displays, and integrates with CaltonDatx camera
                  recorders and vcastplay media players, whether in landscape or portrait orientation.`
      }
    ]
    // this.faqApi.getPost().subscribe(data => {
    //   this.faqs = data;
    //   this.loading.set(false)
    // })
    
  }

}
