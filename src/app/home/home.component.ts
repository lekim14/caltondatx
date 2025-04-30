import { Component, OnInit, signal } from '@angular/core';
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

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, FaqComponent, CarouselModule, ContactUsComponent, AccordionModule, AnimateOnScrollModule, FooterComponent, ScrollTopModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  headerTitle = signal('');
  customerStories!: CustomerStories[]; 

  constructor(private reviewApi: ReviewsService){}

  ngOnInit(){
    this.customerStories = [
      {
        description : `Discover how our services have
                      transformed lives and businesses
                      through the heartfelt stories and
                      glowing reviews shared by our
                      valued customers.`,
        fullName : 'Full Name 1'
      },
      {
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.`,
        fullName : 'Full Name 2'
      },
      {
        description: `Curabitur volutpat urna at pellentesque ornare. Vivamus enim lectus, auctor ut lectus et, commodo pellentesque nulla. Phasellus elementum dignissim placerat`,
        fullName : 'Full Name 3'
      }
    ]
    // this.getCustomerStories();
  }

  getCustomerStories(){
    this.reviewApi.getPost().subscribe(data => {
      this.customerStories = data
    })
  }
}