import { TestBed } from '@angular/core/testing';

import { JoyasService } from './joyas.service';

describe('JoyasService', () => {
  let service: JoyasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoyasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
