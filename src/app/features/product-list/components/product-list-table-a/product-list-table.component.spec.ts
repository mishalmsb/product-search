import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListTableComponentA } from './product-list-table.component';

describe('ProductListTableComponentA', () => {
  let component: ProductListTableComponentA;
  let fixture: ComponentFixture<ProductListTableComponentA>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListTableComponentA],
    });
    fixture = TestBed.createComponent(ProductListTableComponentA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
