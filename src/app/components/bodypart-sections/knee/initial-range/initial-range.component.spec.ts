import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialRangeComponent } from './initial-range.component';

describe('InitialRangeComponent', () => {
  let component: InitialRangeComponent;
  let fixture: ComponentFixture<InitialRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
