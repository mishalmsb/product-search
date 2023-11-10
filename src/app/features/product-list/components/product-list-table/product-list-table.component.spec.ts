import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListTableComponent } from './product-list-table.component';

describe('ProductListTableComponent', () => {
  let component: ProductListTableComponent;
  let fixture: ComponentFixture<ProductListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListTableComponent]
    });
    fixture = TestBed.createComponent(ProductListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
