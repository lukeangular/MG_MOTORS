import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDealerComponent } from './admin-dealer.component';

describe('AdminDealerComponent', () => {
  let component: AdminDealerComponent;
  let fixture: ComponentFixture<AdminDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
