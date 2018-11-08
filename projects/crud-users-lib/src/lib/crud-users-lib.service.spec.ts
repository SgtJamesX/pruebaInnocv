import { TestBed } from '@angular/core/testing';

import { CrudUsersLibService } from './crud-users-lib.service';

describe('CrudUsersLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudUsersLibService = TestBed.get(CrudUsersLibService);
    expect(service).toBeTruthy();
  });
});
