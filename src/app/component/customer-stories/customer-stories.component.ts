import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CustomerStories } from '../../interface';

@Component({
  selector: 'app-customer-stories',
  imports: [CarouselModule],
  templateUrl: './customer-stories.component.html',
  styleUrl: './customer-stories.component.scss'
})
export class CustomerStoriesComponent implements OnInit{
  customerStories!: CustomerStories[]; 

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
}
