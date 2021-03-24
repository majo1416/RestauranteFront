import { TestBed } from '@angular/core/testing';

import { ClientProductsService } from './client-products.service';

describe('ClientProductsService', () => {
  let service: ClientProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
