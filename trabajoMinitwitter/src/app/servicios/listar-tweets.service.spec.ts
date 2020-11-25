import { TestBed } from '@angular/core/testing';

import { ListarTweetsService } from './listar-tweets.service';

describe('ListarTweetsService', () => {
  let service: ListarTweetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarTweetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
