import { TestBed } from '@angular/core/testing';

import { SnailApiService } from './snail-api.service';

describe('SnailApiService', () => {
  let service: SnailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
