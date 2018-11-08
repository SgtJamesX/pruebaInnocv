import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsersLibComponent } from './crud-users-lib.component';

describe('CrudUsersLibComponent', () => {
  let component: CrudUsersLibComponent;
  let fixture: ComponentFixture<CrudUsersLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudUsersLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUsersLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
