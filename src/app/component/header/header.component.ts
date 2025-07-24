import { Component, signal } from '@angular/core';
import { CustomerStories } from '../../interface';
import { MenubarModule } from 'primeng/menubar';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
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
            { label: 'Overview of CaltonDatx', route: '', fragment: '' }, 
            { label: 'Core Features', route: '', fragment: 'core-features' },
            { label: 'Why CaltonDatx', route: '', fragment: 'why-calton' }, 
            { label: 'Request a Demo (CTA)', route: '' } 
        ],
        // route: '/'
    }, 
    { 
        label: 'Product', 
        items: [ 
            { 
              label: 'People Analytics',
              items : [
                { label: 'Gender Detection', route: '/product', fragment: 'analytics' },
                { label: 'Age Group Estimates', route: '/product', fragment: 'analytics' },
                { label: 'Foot Traffic Heatmaps', route: '/product', fragment: 'analytics' }
              ]
            },
            { 
              label: 'Vehicle Analytics',
              items: [
                { label: 'Vehicle Count', route: '/product', fragment: 'analytics' },
                { label: 'Type/Direction Detection', route: '/product', fragment: 'analytics' },
                { label: 'Watcher Stats', route: '/product', fragment: 'analytics' },
              ]
            },
            { label: 'Real-Time Dashboard', route: '/product', fragment: 'real-time-dashboard' },
            { label: 'Reports & Insights', route: '/product', fragment: 'reports-insights' },
            { 
              label: 'AI & Data Privacy',
              items: [
                { label: 'No image/video storage', route: '/product', fragment: 'reports-insights' },
                { label: 'Anonymized data', route: '/product', fragment: 'reports-insights' },
              ] 
            },
            { 
              label: 'Integration Capabilities',
              items: [
                { label: 'Digital Signage (Vcastplay)', route: '/product', fragment: 'integration' },
                { label: 'Portals, CMS, etc.', route: '/product', fragment: 'integration' },
              ] 
            },
        ] ,
    },
    {
      label: 'Solutions',
      items: [
        { label: 'For Advertising Agencies', route: '', fragment: '' },
        { label: 'For Malls & Retail', route: '', fragment: '' },
        { label: 'For Local Government', route: '', fragment: '' },
        { label: 'For Transport Hubs', route: '', fragment: '' },
        { label: 'Custom Solution', route: '', fragment: '' },
      ]
    },
    {
      label: 'Resources',
      items: [
        { label: 'Case Studiess', route: '', fragment: '' },
        { label: 'Whitepapers', route: '', fragment: '' },
        { label: 'Blog / Updates', route: '', fragment: '' },
        { label: 'Product Documentation', route: '', fragment: '' },
        { label: 'Video Demos / Tutorials', route: '', fragment: '' },
      ]
    },
    {
      label: 'About Us',
      items: [
        { label: 'Company Profile (NYXSYS)', route: '/about-us' },
        { label: 'Vision & Mission', route: '/about-us', fragment: 'vision-mission' },
        { label: 'Team', route: '/about' },
        { label: 'Careers', route: '/about' },
      ]
    },
    {
      label: 'Support',
      items: [
        { label: 'Contact Support', route: '', fragment: '' },
        { label: 'FAQs', route: '', fragment: '' },
        { label: 'Request Assistance', route: '', fragment: '' },
      ]
    },
    {
      label: 'Request a Demo',
      styleClass: 'md:hidden block', 
      route: '/'
    },
    {
      label: 'Login',
      styleClass: 'md:hidden block', 
      route: '/',
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

  onHover(item: string){
    console.log(item)
  }

}
