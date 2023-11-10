import { TestBed } from '@angular/core/testing';
import { StockUtilityService } from './stock-utils.service';

describe('StockUtilityService', () => {
  let service: StockUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
