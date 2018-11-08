import { TestBed } from '@angular/core/testing';

import { TopBarLibService } from './top-bar-lib.service';

describe('TopBarLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopBarLibService = TestBed.get(TopBarLibService);
    expect(service).toBeTruthy();
  });
});
