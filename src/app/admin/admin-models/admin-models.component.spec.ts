import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModelsComponent } from './admin-models.component';

describe('AdminModelsComponent', () => {
  let component: AdminModelsComponent;
  let fixture: ComponentFixture<AdminModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
