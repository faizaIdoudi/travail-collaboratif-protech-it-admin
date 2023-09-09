import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendementParMoisComponent } from './rendement-par-mois.component';

describe('RendementParMoisComponent', () => {
  let component: RendementParMoisComponent;
  let fixture: ComponentFixture<RendementParMoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendementParMoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendementParMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
