import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {

}
