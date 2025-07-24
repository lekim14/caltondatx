import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CustomerStories } from '../../interface';

@Component({
  selector: 'app-customer-stories',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './customer-stories.component.html',
  styleUrl: './customer-stories.component.scss'
})
export class CustomerStoriesComponent implements OnInit{
  customerStories!: CustomerStories[]; 

  ngOnInit(){
    this.customerStories = [
      {
        description : `Calton Datx enables us to measure the impact of our billboard campaigns, providing valuable insights that help us assess the effectiveness of our investment.`,
        fullName : 'New Balance',
        image: 'assets/images/testimonials/new balance.png'
      },
      {
        description : `Calton Datx is important for us because when we recommend sites to clients, they often request additional data—especially traffic data—to  valuate if their investment is worthwhile. It helps us demonstrate the visibility of a site to the mass market by providing accurate and compelling numbers. What sets Calton Datx apart is its up-to-date data, unlike other sources that rely on MMDA figures, which are typically updated only once a year.`,
        fullName : 'IPG Media Brands',
        image: 'assets/images/testimonials/ipg media brands.png',
      },
      {
        fullName: 'Dentsu',
        image: 'assets/images/testimonials/dentsu.jpg',
        description: `Significance for me is the Indoor Report, it's a niche set of data that helps us to understand the demographics more. I have not met any data providers as detailed as Calton Datx.`,
      },
      {
        fullName: 'Spark',
        image: 'assets/images/testimonials/spark.png',
        description: `Calton DATx supports our campaigns by delivering the key metrics for outof-home advertising: traffic count and impressions, which are  rucial for measuring campaign effectiveness.`,
      },
      {
        fullName: 'UNILAB',
        image: 'assets/images/testimonials/unilab.jpg',
        description: `Calton DATx helps in our post campaign report to gauge efficiency of the sites.`,
      },
      {
        fullName: 'The Huddle Room',
        image: 'assets/images/testimonials/the huddle room.jpg',
        description: `Calton DATx is highly beneficial to outof-home advertising, providing detailed data and specific figures for targeted areas, helping us make more informed decisions.`,
      },
    ]

    
    // this.getCustomerStories();
  }
  
}
