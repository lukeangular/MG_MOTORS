import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpeacificationComponent } from './car-speacification.component';

describe('CarSpeacificationComponent', () => {
  let component: CarSpeacificationComponent;
  let fixture: ComponentFixture<CarSpeacificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSpeacificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSpeacificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
