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
            { label: 'Overview of CaltonDatx', route: '/test' }, 
            { label: 'Core Features' },
            { label: 'Why CaltonDatx' }, 
            { label: 'Request a Demo (CTA)' } 
        ],
        route: '/'
    }, 
    { 
        label: 'Product', 
        items: [ 
            { 
              label: 'People Analytics',
              items : [
                { label: 'Gender Detection' },
                { label: 'Age Group Estimates' },
                { label: 'Foot Traffic Heatmaps' }
              ]
            },
            { 
              label: 'Vehicle Analytics',
              items: [
                { label: 'Vehicle Count' },
                { label: 'Type/Direction Detection' },
                { label: 'Watcher Stats' },
              ]
            },
            { label: 'Real-Time Dashboard' },
            { label: 'Reports & Insights' },
            { 
              label: 'AI & Data Privacy',
              items: [
                { label: 'No image/video storage' },
                { label: 'Anonymized data' },
              ] 
            },
            { 
              label: 'Integration Capabilities',
              items: [
                { label: 'Digital Signage (Vcastplay)' },
                { label: 'Portals, CMS, etc.' },
              ] 
            },
        ] ,
        route : '/route1'
    },
    {
      label: 'Solutions',
      items: [
        { label: 'For Advertising Agencies' },
        { label: 'For Malls & Retail' },
        { label: 'For Local Government' },
        { label: 'For Transport Hubs' },
        { label: 'Custom Solution' },
      ]
    },
    {
      label: 'Resources',
      items: [
        { label: 'Case Studiess' },
        { label: 'Whitepapers' },
        { label: 'Blog / Updates' },
        { label: 'Product Documentation' },
        { label: 'Video Demos / Tutorials' },
      ]
    },
    {
      label: 'About Us',
      items: [
        { label: 'Company Profile (NYXSYS)' },
        { label: 'Vision & Mission' },
        { label: 'Team' },
        { label: 'Careers' },
      ]
    },
    {
      label: 'Support',
      items: [
        { label: 'Contact Support' },
        { label: 'FAQs' },
        { label: 'Request Assistance' },
      ]
    },
    {
      label: 'Request a Demo',
      styleClass: 'md:hidden block'
    },
    {
      label: 'Login',
      styleClass: 'md:hidden block'
    }
]; 
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
