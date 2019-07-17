import { TestBed, inject } from '@angular/core/testing';

import { EbookService } from './ebook.service';

describe('EbookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EbookService]
    });
  });

  it('should be created', inject([EbookService], (service: EbookService) => {
    expect(service).toBeTruthy();
  }));
});
