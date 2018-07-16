import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointStabilityComponent } from './joint-stability.component';

describe('JointStabilityComponent', () => {
  let component: JointStabilityComponent;
  let fixture: ComponentFixture<JointStabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointStabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointStabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
