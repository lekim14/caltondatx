import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

import { CarouselModule } from 'primeng/carousel';
import { CustomerStories } from '../../interface';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { FaqComponent } from '../faq/faq.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, CarouselModule, AnimateOnScrollModule, FaqComponent, ContactUsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerTitle = signal('');
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
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mi et massa condimentum molestie eu sit amet velit. In hac habitasse platea dictumst. `,
        fullName : 'Full Name 2'
      }
    ]

    
  }

}
