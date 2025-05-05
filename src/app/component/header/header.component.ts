import { Component, signal } from '@angular/core';
import { CustomerStories } from '../../interface';
import { MenubarModule } from 'primeng/menubar';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, NgClass, NgIf, RouterLink, ButtonComponent, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerTitle = signal('');
  customerStories!: CustomerStories[]; 
  items: MenuItem[] = [ 
    { 
        label: 'Home', 
        items: [ 
            { label: 'Overview of CaltonDatx', route: '/overview-of-caltondatx' }, 
            { label: 'Core Features', route: '/core-features' },
            { label: 'Why CaltonDatx', route: '/why-caltondatx' }, 
            { label: 'Request a Demo (CTA)', route: 'request-a-demo' } 
        ],
        // route: '/'
    }, 
    { 
        label: 'Product', 
        items: [ 
            { 
              label: 'People Analytics',
              items : [
                { label: 'Gender Detection', route: '/product/gender-detection' },
                { label: 'Age Group Estimates', route: '/product/age-group-estimates' },
                { label: 'Foot Traffic Heatmaps', route: '/product/foot-traffic-heatmaps' }
              ]
            },
            { 
              label: 'Vehicle Analytics',
              items: [
                { label: 'Vehicle Count', route: '/product/vehicle-analytics/vehicle-count' },
                { label: 'Type/Direction Detection', route: '/product/vehicle-analytics/type-direction-detection' },
                { label: 'Watcher Stats', route: '/product/vehicle-analytics/watcher-stats' },
              ]
            },
            { label: 'Real-Time Dashboard', route: '/products/real-time-dashboard' },
            { label: 'Reports & Insights', route: '/products/reports-insights' },
            { 
              label: 'AI & Data Privacy',
              items: [
                { label: 'No image/video storage', route: '/products/ai-and-data-privacy/no-image-video-storage' },
                { label: 'Anonymized data', route: '/products/ai-and-data-privacy/anonymized-data' },
              ] 
            },
            { 
              label: 'Integration Capabilities',
              items: [
                { label: 'Digital Signage (Vcastplay)', route: '/product/integration-capabilities/digital-signage-vscastplay' },
                { label: 'Portals, CMS, etc.', route: '/product/integration-capabilities/portal-cms-etc' },
              ] 
            },
        ] ,
    },
    {
      label: 'Solutions',
      items: [
        { label: 'For Advertising Agencies', route: '/solutions/for-advertising-agencies' },
        { label: 'For Malls & Retail', route: '/solutions/for-malls-and-retail' },
        { label: 'For Local Government', route: '/solutions/for-local-government' },
        { label: 'For Transport Hubs', route: '/solutions/for-transport-hubs' },
        { label: 'Custom Solution', route: '/solutions/custom-solution' },
      ]
    },
    {
      label: 'Resources',
      items: [
        { label: 'Case Studiess', route: '/resources/case-studies' },
        { label: 'Whitepapers', route: '/resources/whitepapers' },
        { label: 'Blog / Updates', route: '/resources/blog-updates' },
        { label: 'Product Documentation', route: '/resources/product-documentations' },
        { label: 'Video Demos / Tutorials', route: '/resources/video-demos-tutorials' },
      ]
    },
    {
      label: 'About Us',
      items: [
        { label: 'Company Profile (NYXSYS)', route: '/about/company-profile' },
        { label: 'Vision & Mission', route: '/about/vision-and-mission' },
        { label: 'Team', route: '/about/teams' },
        { label: 'Careers', route: '/about/careers' },
      ]
    },
    {
      label: 'Support',
      items: [
        { label: 'Contact Support', route: '/support/contact-support' },
        { label: 'FAQs', route: '/support/faqs' },
        { label: 'Request Assistance', route: '/support/request-assistance' },
      ]
    },
    {
      label: 'Request a Demo',
      styleClass: 'md:hidden block', 
      route: '/request-a-demo'
    },
    {
      label: 'Login',
      styleClass: 'md:hidden block', 
      route: '/login',
      icon: 'pi pi-sign-in',
    }
  ];
  expandedIcon = 'pi-angle-right'; 
  activeMenu = '';
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

  handleClick(menu: string){
    if(this.activeMenu === menu){
      this.activeMenu = '';
    }else{
      this.activeMenu = menu;
    }
    const filteredMenu = this.items.filter(item => item.label === menu);
    
    if(filteredMenu[0]?.items && menu === filteredMenu[0]?.label){
      this.expandedIcon = 'pi-angle-down'
    }else{
      this.expandedIcon = 'pi-angle-right'
    }
  }

}
