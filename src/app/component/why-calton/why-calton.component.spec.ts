import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCaltonComponent } from './why-calton.component';

describe('WhyCaltonComponent', () => {
  let component: WhyCaltonComponent;
  let fixture: ComponentFixture<WhyCaltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyCaltonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyCaltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
