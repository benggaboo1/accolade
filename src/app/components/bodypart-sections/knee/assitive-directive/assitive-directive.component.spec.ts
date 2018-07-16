import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssitiveDirectiveComponent } from './assitive-directive.component';

describe('AssitiveDirectiveComponent', () => {
  let component: AssitiveDirectiveComponent;
  let fixture: ComponentFixture<AssitiveDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssitiveDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssitiveDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
