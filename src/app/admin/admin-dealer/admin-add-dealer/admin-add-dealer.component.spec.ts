import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDealerComponent } from './admin-add-dealer.component';

describe('AdminAddDealerComponent', () => {
  let component: AdminAddDealerComponent;
  let fixture: ComponentFixture<AdminAddDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddDealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
