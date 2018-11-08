import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService} from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [MessageService, TranslateService],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NavBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
