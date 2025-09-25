import { TestBed } from '@angular/core/testing';

import { SnailToastService } from './toast.service';

describe('ToastService', () => {
  let service: SnailToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnailToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
