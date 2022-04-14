import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComapnyFormComponent } from './add-comapny-form.component';

describe('AddComapnyFormComponent', () => {
  let component: AddComapnyFormComponent;
  let fixture: ComponentFixture<AddComapnyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComapnyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComapnyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
