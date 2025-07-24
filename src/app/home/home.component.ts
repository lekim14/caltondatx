import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { ButtonComponent } from '../component/button/button.component';
import { FaqComponent } from '../component/faq/faq.component';
import { ContactUsComponent } from '../component/contact-us/contact-us.component';
import { AccordionModule } from 'primeng/accordion';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CustomerStories } from '../interface';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from '../component/footer/footer.component';
import { ReviewsService } from '../services/reviews.service';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ComponentsModule } from '../modules/components/components.module';
import { SolutionsComponent } from '../component/solutions/solutions.component';
import { FeaturedProductComponent } from '../component/featured-product/featured-product.component';
import { AudienceMeasurementComponent } from '../component/audience-measurement/audience-measurement.component';
import { ElevateYourAnalyticsComponent } from '../component/elevate-your-analytics/elevate-your-analytics.component';
import { AudienceMetricSolutionComponent } from '../component/audience-metric-solution/audience-metric-solution.component';
import { TestimonialsComponent } from '../component/testimonials/testimonials.component';
import { CustomerStoriesComponent } from '../component/customer-stories/customer-stories.component';
import { WhyCaltonComponent } from '../component/why-calton/why-calton.component';
import { CoreFeaturesComponent } from '../component/core-features/core-features.component';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    ButtonComponent, 
    FaqComponent, 
    CarouselModule, 
    ContactUsComponent, 
    AccordionModule, 
    AnimateOnScrollModule, 
    FooterComponent, 
    ScrollTopModule,
    SolutionsComponent,
    FeaturedProductComponent,
    // AudienceMeasurementComponent,
    ElevateYourAnalyticsComponent,
    // AudienceMetricSolutionComponent,
    TestimonialsComponent,
    CustomerStoriesComponent,
    WhyCaltonComponent,
    CoreFeaturesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit{
  headerTitle = signal('');
  customerStories!: CustomerStories[]; 
  activatedRoute: any;

  constructor(
    private reviewApi: ReviewsService,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ){}

  ngOnInit(){
    
    // this.getCustomerStories();
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if(fragment){
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment)
        })
      }
    })
  }

  getCustomerStories(){
    this.reviewApi.getPost().subscribe(data => {
      this.customerStories = data
    })
  }
}