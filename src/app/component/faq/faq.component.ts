import { Component, OnInit, signal } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { FAQ } from '../../interface';
import { NgFor, NgIf } from '@angular/common';
import { FaqsService } from '../../services/faqs/faqs.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-faq',
  imports: [AccordionModule, AnimateOnScrollModule, NgFor, NgIf, NgxSkeletonLoaderModule],
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
        question : `Question 1`,
        answer : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.`
      },
      {
        id : '2',
        question : `Question 2`,
        answer : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.`
      },
      {
        id : '3',
        question : `Question 3`,
        answer : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.`
      }
    ]
    // this.faqApi.getPost().subscribe(data => {
    //   this.faqs = data;
    //   this.loading.set(false)
    // })
    
  }

}
