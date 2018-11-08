import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarLibComponent } from './top-bar-lib.component';

describe('TopBarLibComponent', () => {
  let component: TopBarLibComponent;
  let fixture: ComponentFixture<TopBarLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
