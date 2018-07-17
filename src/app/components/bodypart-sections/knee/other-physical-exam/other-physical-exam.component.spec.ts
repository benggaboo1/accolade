import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPhysicalExamComponent } from './other-physical-exam.component';

describe('OtherPhysicalExamComponent', () => {
  let component: OtherPhysicalExamComponent;
  let fixture: ComponentFixture<OtherPhysicalExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPhysicalExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPhysicalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
