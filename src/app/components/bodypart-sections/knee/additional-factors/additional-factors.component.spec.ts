import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalFactorsComponent } from './additional-factors.component';

describe('AdditionalFactorsComponent', () => {
  let component: AdditionalFactorsComponent;
  let fixture: ComponentFixture<AdditionalFactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalFactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
