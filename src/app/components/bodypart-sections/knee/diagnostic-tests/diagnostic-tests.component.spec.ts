import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticTestsComponent } from './diagnostic-tests.component';

describe('DiagnosticTestsComponent', () => {
  let component: DiagnosticTestsComponent;
  let fixture: ComponentFixture<DiagnosticTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
