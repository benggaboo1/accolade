import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatedUseComponent } from './repeated-use.component';

describe('RepeatedUseComponent', () => {
  let component: RepeatedUseComponent;
  let fixture: ComponentFixture<RepeatedUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatedUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatedUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
