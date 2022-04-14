import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateDealerComponent } from './admin-update-dealer.component';

describe('AdminUpdateDealerComponent', () => {
  let component: AdminUpdateDealerComponent;
  let fixture: ComponentFixture<AdminUpdateDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateDealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
