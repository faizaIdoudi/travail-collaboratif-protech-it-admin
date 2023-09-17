import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseAJourComponent } from './mise-ajour.component';

describe('MiseAJourComponent', () => {
  let component: MiseAJourComponent;
  let fixture: ComponentFixture<MiseAJourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiseAJourComponent]
    });
    fixture = TestBed.createComponent(MiseAJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
