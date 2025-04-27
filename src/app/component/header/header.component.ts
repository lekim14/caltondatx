import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

import { AccordionModule } from 'primeng/accordion';
import { CarouselModule } from 'primeng/carousel';
import { CustomerStories } from '../../interface';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, AccordionModule, CarouselModule],
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
                      valued customers.`
      },
      {
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mi et massa condimentum molestie eu sit amet velit. In hac habitasse platea dictumst. `
      }
    ]
  }
}
