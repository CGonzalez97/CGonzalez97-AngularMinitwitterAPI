import { TestBed } from '@angular/core/testing';

import { FavServicioService } from './fav-servicio.service';

describe('FavServicioService', () => {
  let service: FavServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
