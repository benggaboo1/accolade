import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetitiveTestingComponent } from './repetitive-testing.component';

describe('RepetitiveTestingComponent', () => {
  let component: RepetitiveTestingComponent;
  let fixture: ComponentFixture<RepetitiveTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepetitiveTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepetitiveTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
