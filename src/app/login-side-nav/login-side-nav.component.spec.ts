import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSideNavComponent } from './login-side-nav.component';

describe('LoginSideNavComponent', () => {
  let component: LoginSideNavComponent;
  let fixture: ComponentFixture<LoginSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
