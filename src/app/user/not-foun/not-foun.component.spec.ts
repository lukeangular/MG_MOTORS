import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFounComponent } from './not-foun.component';

describe('NotFounComponent', () => {
  let component: NotFounComponent;
  let fixture: ComponentFixture<NotFounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFounComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
