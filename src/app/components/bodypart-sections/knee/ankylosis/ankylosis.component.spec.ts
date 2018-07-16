import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkylosisComponent } from './ankylosis.component';

describe('AnkylosisComponent', () => {
  let component: AnkylosisComponent;
  let fixture: ComponentFixture<AnkylosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnkylosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkylosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
