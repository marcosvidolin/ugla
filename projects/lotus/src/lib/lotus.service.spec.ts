import { TestBed } from '@angular/core/testing';

import { LotusService } from './lotus.service';

describe('LotusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LotusService = TestBed.get(LotusService);
    expect(service).toBeTruthy();
  });
});
