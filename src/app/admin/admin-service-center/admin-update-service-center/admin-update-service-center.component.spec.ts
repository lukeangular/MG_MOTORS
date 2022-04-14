import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateServiceCenterComponent } from './admin-update-service-center.component';

describe('AdminUpdateServiceCenterComponent', () => {
  let component: AdminUpdateServiceCenterComponent;
  let fixture: ComponentFixture<AdminUpdateServiceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateServiceCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
