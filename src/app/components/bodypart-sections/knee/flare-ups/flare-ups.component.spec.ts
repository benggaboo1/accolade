import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlareUpsComponent } from './flare-ups.component';

describe('FlareUpsComponent', () => {
  let component: FlareUpsComponent;
  let fixture: ComponentFixture<FlareUpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlareUpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlareUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
