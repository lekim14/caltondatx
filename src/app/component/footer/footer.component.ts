import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-footer',
  imports: [ButtonComponent, AnimateOnScrollModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
