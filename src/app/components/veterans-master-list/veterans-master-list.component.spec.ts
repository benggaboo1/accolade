import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteransMasterListComponent } from './veterans-master-list.component';

describe('VeteransMasterListComponent', () => {
  let component: VeteransMasterListComponent;
  let fixture: ComponentFixture<VeteransMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeteransMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteransMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
