import { TestBed } from '@angular/core/testing';

import { CalcularService } from './calcular.service';

describe('CalcularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcularService = TestBed.get(CalcularService);
    expect(service).toBeTruthy();
  });
});
