import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSectionComponent } from './product-list-section.component';

describe('ProductListSectionComponent', () => {
  let component: ProductListSectionComponent;
  let fixture: ComponentFixture<ProductListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
