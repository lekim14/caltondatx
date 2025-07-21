import { Component } from '@angular/core';

@Component({
  selector: 'app-why-calton',
  standalone: true,
  imports: [],
  templateUrl: './why-calton.component.html',
  styleUrl: './why-calton.component.scss'
})
export class WhyCaltonComponent {

  content: any[] = [
    {
      title: 'Make Smarter, Faster Decisions',
      description: 'With real-time data at your fingertips, you can respond to trends and optimize campaigns on the spots.',
      icon: 'smarter.png'
    },
    {
      title: 'Understand Your True Audience',
      description: 'Go beyond basic impressions by uncovering who your viewers are, how they feel, and what captures their attention.',
      icon: 'audience.png'
    },
    {
      title: 'Turn Data Into Strategy',
      description: `Calton Datx doesn't just track metrics - it transfroms them into insights that guide impactful marketing moves.`,
      icon: 'strategy.png'
    },
    {
      title: 'Work Anywhere',
      description: 'Enjoy hassle-free access from any device with enterprise-grade security and no software to install',
      icon: 'world.png'
    },
    {
      title: 'Simplify Reporting & Prove Value',
      description: 'Impress stakeholders with clean, visual reports that clearly show performance, efficiency and ROI.',
      icon: 'report.png'
    }
  ]
  
}
