import { AfterViewInit, Component } from '@angular/core';
import { FooterComponent } from '../component/footer/footer.component';
import { ContactUsComponent } from '../component/contact-us/contact-us.component';
import { ButtonComponent } from '../component/button/button.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FooterComponent, ContactUsComponent, ButtonComponent, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements AfterViewInit {

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

  peopleAnalytics: any[] = [
    'OTS, Watcher, Dwell Time, Attention Time', 
    'Age, gender, and emotion detection (90% accuracy at 2-3m)',
    'Attention distribution by time and location',
    'Emotion breakdown by gender and group',
  ];

  vehicleAnalytics: any[] = [
    'Total vehicle count, speed, dwell time, impressions',
    'Insight by vehicle type (car, bus, motorcycle, etc.)',
    'Campaign performance by traffic patterns',
    'Real-time traffic-based ROI measurement'
  ];

  dashboardFeatures: any[] = [
    'Real-time data updates on people and vehicle activity',
    'Device and location monitoring with map pinning',
    'Live feed screenshot capability for visual checks',
    'Role-based dashboard access by user level'
  ];

  reportFeatures: any[] =[
    'Unlimited reports with export options (PDF, PNG, CSV)',
    'Filter by hour, day, week, or month',
    'AI-generated summaries for campaigns and benchmarks',
    'Compare CPV across industries and timeframes'
  ]

  integrationFeatures: any[] = [
    'Works with CaltonDatx Camera Recorders and vcastplay players',
    'Compatible with LED, LCD, and portrait/landscape screens',
    'Mobile, desktop, and admin PC access',
    'No software installation required—100% web-based (also available in google play & apple store)',
    'Cloud-hosted with secure access protocols (SSL, RBAC)'
  ]

}
