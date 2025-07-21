import { Component } from '@angular/core';

@Component({
  selector: 'app-core-features',
  imports: [],
  templateUrl: './core-features.component.html',
  styleUrl: './core-features.component.scss'
})
export class CoreFeaturesComponent {

  content: any[] = [
    {
      title: 'Real-Time Audience Measurement',
      description: `Calton Datx tracks actual viewer engagement through
                    metrics like Watchers, OTS (Opportunities to See),
                    Dwell Time, and Attention Time, with AI-powered
                    insights to assess campaign performance.`,
      icon: 'clock.png'
    },
    {
      title: 'Demographic & Emotion Analytics',
      description: 'It detects age, gender, and emotional responses to help brands understand who is watching and how they feel.',
      icon: 'people.png'
    },
    {
      title: 'Vehicle-Based Metrics',
      description: 'The system measures vehicle traffic, speed, dwell time, and impressions - ideal for analyzing outdoor LED and roadside campaigns.',
      icon: 'metrics.png'
    },
    {
      title: 'Cost & ROI Analysis',
      description: 'Calton Datx calculates Cost Per View (CPV) to identify the most cost-efficient and high-impact campaigns.',
      icon: 'roi.png'
    },
    {
      title: 'Automated Reports & Data Exports',
      description: 'It enables one-click automated reporting with export options in CSV, PDF, supporting unlimited report requests.',
      icon: 'analytics.png'
    },
    {
      title: 'Cloud-Based Access & Security',
      description: 'The fully web-based platform features role-based access control, SSL encryption, and requires no software installation.',
      icon: 'cloud.png'
    }
  ]

}
