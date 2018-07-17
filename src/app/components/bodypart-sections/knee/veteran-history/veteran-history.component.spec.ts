import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteranHistoryComponent } from './veteran-history.component';

describe('VeteranHistoryComponent', () => {
  let component: VeteranHistoryComponent;
  let fixture: ComponentFixture<VeteranHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeteranHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteranHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
