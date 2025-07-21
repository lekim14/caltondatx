import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../component/footer/footer.component';
import { ContactUsComponent } from '../component/contact-us/contact-us.component';
import { ComponentsModule } from '../modules/components/components.module';
import { ButtonComponent } from '../component/button/button.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FooterComponent, ContactUsComponent, ComponentsModule, ButtonComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent{
  
}
