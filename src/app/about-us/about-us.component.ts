import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../component/footer/footer.component';
import { ContactUsComponent } from '../component/contact-us/contact-us.component';
import { ComponentsModule } from '../modules/components/components.module';
import { ButtonComponent } from '../component/button/button.component';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FooterComponent, ContactUsComponent, ComponentsModule, ButtonComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements AfterViewInit{
   constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ){}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if(fragment){
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment)
        })
      }
    })
  }
}
