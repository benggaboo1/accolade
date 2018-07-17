import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPertinentPeComponent } from './other-pertinent-pe.component';

describe('OtherPertinentPeComponent', () => {
  let component: OtherPertinentPeComponent;
  let fixture: ComponentFixture<OtherPertinentPeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPertinentPeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPertinentPeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
