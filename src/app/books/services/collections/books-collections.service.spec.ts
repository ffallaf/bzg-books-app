import { TestBed, inject } from '@angular/core/testing';

import { BooksCollectionsService } from './books-collections.service';

describe('BooksCollectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksCollectionsService]
    });
  });

  it('should be created', inject([BooksCollectionsService], (service: BooksCollectionsService) => {
    expect(service).toBeTruthy();
  }));
});
