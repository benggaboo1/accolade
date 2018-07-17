import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingEffectiveFunctionComponent } from './remaining-effective-function.component';

describe('RemainingEffectiveFunctionComponent', () => {
  let component: RemainingEffectiveFunctionComponent;
  let fixture: ComponentFixture<RemainingEffectiveFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingEffectiveFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingEffectiveFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
