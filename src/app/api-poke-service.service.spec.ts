import { TestBed } from '@angular/core/testing';

import { ApiPokeServiceService } from './api-poke-service.service';

describe('ApiPokeServiceService', () => {
  let service: ApiPokeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPokeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
