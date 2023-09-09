import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAddEditEmpFormComponent } from './open-add-edit-emp-form.component';

describe('OpenAddEditEmpFormComponent', () => {
  let component: OpenAddEditEmpFormComponent;
  let fixture: ComponentFixture<OpenAddEditEmpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAddEditEmpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenAddEditEmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
