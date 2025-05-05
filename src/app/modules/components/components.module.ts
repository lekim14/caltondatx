import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsComponent } from '../../component/solutions/solutions.component';
import { FeaturedProductComponent } from '../../component/featured-product/featured-product.component';
import { AudienceMeasurementComponent } from '../../component/audience-measurement/audience-measurement.component';
import { ElevateYourAnalyticsComponent } from '../../component/elevate-your-analytics/elevate-your-analytics.component';
import { AudienceMetricSolutionComponent } from '../../component/audience-metric-solution/audience-metric-solution.component';
import { TestimonialsComponent } from '../../component/testimonials/testimonials.component';
import { CustomerStoriesComponent } from '../../component/customer-stories/customer-stories.component';
import { FaqComponent } from '../../component/faq/faq.component';
import { ContactUsComponent } from '../../component/contact-us/contact-us.component';
import { FooterComponent } from '../../component/footer/footer.component';

const COMPONENTS = [
  CommonModule,
  SolutionsComponent,
  FeaturedProductComponent,
  AudienceMeasurementComponent,
  ElevateYourAnalyticsComponent,
  AudienceMetricSolutionComponent,
  TestimonialsComponent,
  CustomerStoriesComponent,
  FaqComponent,
  ContactUsComponent,
  FooterComponent
]

@NgModule({
  declarations: [],
  imports: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ]
})
export class ComponentsModule { }
