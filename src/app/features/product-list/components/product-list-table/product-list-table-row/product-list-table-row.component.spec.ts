import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListTableRowComponent } from './product-list-table-row.component';

describe('ProductListTableRowComponent', () => {
  let component: ProductListTableRowComponent;
  let fixture: ComponentFixture<ProductListTableRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListTableRowComponent]
    });
    fixture = TestBed.createComponent(ProductListTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
