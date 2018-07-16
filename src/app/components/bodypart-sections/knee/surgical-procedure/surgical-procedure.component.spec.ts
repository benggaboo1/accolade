import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalProcedureComponent } from './surgical-procedure.component';

describe('SurgicalProcedureComponent', () => {
  let component: SurgicalProcedureComponent;
  let fixture: ComponentFixture<SurgicalProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgicalProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgicalProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
