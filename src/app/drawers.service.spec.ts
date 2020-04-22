import { TestBed } from '@angular/core/testing';

import { DrawersService } from './drawers.service';

describe('DrawersService', () => {
  let service: DrawersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
