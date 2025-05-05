import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceMetricSolutionComponent } from './audience-metric-solution.component';

describe('AudienceMetricSolutionComponent', () => {
  let component: AudienceMetricSolutionComponent;
  let fixture: ComponentFixture<AudienceMetricSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudienceMetricSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudienceMetricSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
