import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarVarianceComponent } from './car-variance.component';

describe('CarVarianceComponent', () => {
  let component: CarVarianceComponent;
  let fixture: ComponentFixture<CarVarianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarVarianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarVarianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
