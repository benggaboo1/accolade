import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFormsComponent } from './accForms.component';

describe('AccFormsComponent', () => {
  let component: AccFormsComponent;
  let fixture: ComponentFixture<AccFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
