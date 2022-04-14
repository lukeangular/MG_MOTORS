import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMgHistoryComponent } from './admin-mg-history.component';

describe('AdminMgHistoryComponent', () => {
  let component: AdminMgHistoryComponent;
  let fixture: ComponentFixture<AdminMgHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMgHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMgHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
