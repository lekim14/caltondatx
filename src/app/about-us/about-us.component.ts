import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../component/footer/footer.component';
import { ContactUsComponent } from '../component/contact-us/contact-us.component';
import { ComponentsModule } from '../modules/components/components.module';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FooterComponent, ContactUsComponent, ComponentsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit, AfterViewInit  {
  
  ngOnInit(): void {
      
  }

  ngAfterViewInit(){
    
  }
}
