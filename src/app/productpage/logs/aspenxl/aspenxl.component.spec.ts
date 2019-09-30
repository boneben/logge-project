import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspenxlComponent } from './aspenxl.component';

describe('AspenxlComponent', () => {
  let component: AspenxlComponent;
  let fixture: ComponentFixture<AspenxlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspenxlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspenxlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
