import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModelListComponent } from './admin-model-list.component';

describe('AdminModelListComponent', () => {
  let component: AdminModelListComponent;
  let fixture: ComponentFixture<AdminModelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
