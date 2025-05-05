import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-audience-measurement',
  imports: [ButtonComponent, AnimateOnScrollModule],
  templateUrl: './audience-measurement.component.html',
  styleUrl: './audience-measurement.component.scss'
})
export class AudienceMeasurementComponent {

}
