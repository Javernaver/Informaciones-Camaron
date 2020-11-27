import { TestBed } from '@angular/core/testing';

import { NoticiaProviderService } from './noticia-provider.service';

describe('NoticiaProviderService', () => {
  let service: NoticiaProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiaProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
