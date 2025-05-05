import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-featured-product',
  imports: [ButtonComponent, AnimateOnScrollModule],
  templateUrl: './featured-product.component.html',
  styleUrl: './featured-product.component.scss'
})
export class FeaturedProductComponent {

}
