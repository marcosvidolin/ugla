import { TestBed } from '@angular/core/testing';

import { uglaService } from './ugla.service';

describe('uglaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: uglaService = TestBed.get(uglaService);
    expect(service).toBeTruthy();
  });
});
