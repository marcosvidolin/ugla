import { TestBed } from '@angular/core/testing';

import { Modal2Service } from './modal2.service';

describe('Modal2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Modal2Service = TestBed.get(Modal2Service);
    expect(service).toBeTruthy();
  });
});
