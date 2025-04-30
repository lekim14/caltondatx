import { Component, signal } from '@angular/core';
import { CustomerStories } from '../../interface';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerTitle = signal('');
  customerStories!: CustomerStories[]; 
  // Header
  links = `
      CaltonDatx Website Menu Structure
      🔝 Top Header (Always Visible on All Pages)
      [Request a Demo] (button)
      [Client Login] (button — top-right corner, links to the client portal)
      Example: https://portal.caltondatx.com
      📂 Main Navigation Menu
      *Home
        Overview of CaltonDatx
        Core Features
        Why CaltonDatx
        Request a Demo (CTA)
      *Product
        *People Analytics
          Gender Detection
          Age Group Estimates
          Foot Traffic Heatmaps
        *Vehicle Analytics
          Vehicle Counts
          Type/Direction Detection
          Watcher Stats
        *Real-Time Dashboard
        *Reports & Insights
        *AI & Data Privacy
          No image/video storage
          Anonymized data
        *Integration Capabilities
          Digital Signage (Vcastplay)
          Portals, CMS, etc.
      *Solutions
        For Advertising Agencies
        For Malls & Retail
        For Local Government
        For Transport Hubs
        Custom Solutions
      *Resources
        Case Studies
        Whitepapers
        Blog / Updates
        Product Documentation
        Video Demos / Tutorials
      *About Us
        Company Profile (NYXSYS)
        Vision & Mission
        Team
        Careers
      *Support
        Contact Support
        FAQs
        Request Assistance`
  // For reference
  // https://www.behance.net/
  // https://webflow.com/templates
  // https://dribbble.com/
  ngOnInit(){
    this.customerStories = [
      {
        description : `Discover how our services have
                      transformed lives and businesses
                      through the heartfelt stories and
                      glowing reviews shared by our
                      valued customers.`,
        fullName : 'Full Name 1'
      },
      {
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mi et massa condimentum molestie eu sit amet velit. In hac habitasse platea dictumst. `,
        fullName : 'Full Name 2'
      }
    ]


    
  }

}
