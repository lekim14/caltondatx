import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-audience-metric-solution',
  standalone: true,
  imports: [ButtonComponent, AnimateOnScrollModule],
  templateUrl: './audience-metric-solution.component.html',
  styleUrl: './audience-metric-solution.component.scss'
})
export class AudienceMetricSolutionComponent {

}
