import { TestBed, inject } from '@angular/core/testing';

import { DailymenuService } from './dailymenu.service';

describe('DailymenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailymenuService]
    });
  });

  it('should be created', inject([DailymenuService], (service: DailymenuService) => {
    expect(service).toBeTruthy();
  }));
});
