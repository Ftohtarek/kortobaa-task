import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionSliderComponent } from './caption-slider.component';

describe('CaptionSliderComponent', () => {
  let component: CaptionSliderComponent;
  let fixture: ComponentFixture<CaptionSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptionSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
