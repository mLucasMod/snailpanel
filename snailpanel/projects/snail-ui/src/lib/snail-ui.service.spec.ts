import { TestBed } from '@angular/core/testing';

import { SnailUiService } from './snail-ui.service';

describe('SnailUiService', () => {
  let service: SnailUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnailUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
