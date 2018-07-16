import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingExtremitiesComponent } from './remaining-extremities.component';

describe('RemainingExtremitiesComponent', () => {
  let component: RemainingExtremitiesComponent;
  let fixture: ComponentFixture<RemainingExtremitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingExtremitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingExtremitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
