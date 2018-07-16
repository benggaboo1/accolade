import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalImpactComponent } from './functional-impact.component';

describe('FunctionalImpactComponent', () => {
  let component: FunctionalImpactComponent;
  let fixture: ComponentFixture<FunctionalImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
