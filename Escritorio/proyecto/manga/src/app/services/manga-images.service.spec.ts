import { TestBed } from '@angular/core/testing';

import { MangaImagesService } from './manga-images.service';

describe('MangaImagesService', () => {
  let service: MangaImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
