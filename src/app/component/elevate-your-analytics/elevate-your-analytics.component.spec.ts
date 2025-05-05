import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevateYourAnalyticsComponent } from './elevate-your-analytics.component';

describe('ElevateYourAnalyticsComponent', () => {
  let component: ElevateYourAnalyticsComponent;
  let fixture: ComponentFixture<ElevateYourAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElevateYourAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevateYourAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
