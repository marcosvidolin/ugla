import { TestBed } from '@angular/core/testing';

import { UglaService } from './ugla.service';

describe('UglaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UglaService = TestBed.get(UglaService);
    expect(service).toBeTruthy();
  });
});
