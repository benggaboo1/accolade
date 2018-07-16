import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteranInfoComponent } from './veteran-info.component';

describe('VeteranInfoComponent', () => {
  let component: VeteranInfoComponent;
  let fixture: ComponentFixture<VeteranInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeteranInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteranInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
