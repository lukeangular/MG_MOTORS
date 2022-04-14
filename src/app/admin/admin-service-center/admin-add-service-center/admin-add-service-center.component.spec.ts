import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddServiceCenterComponent } from './admin-add-service-center.component';

describe('AdminAddServiceCenterComponent', () => {
  let component: AdminAddServiceCenterComponent;
  let fixture: ComponentFixture<AdminAddServiceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddServiceCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
