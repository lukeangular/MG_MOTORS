import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDesignComponent } from './car-design.component';

describe('CarDesignComponent', () => {
  let component: CarDesignComponent;
  let fixture: ComponentFixture<CarDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
