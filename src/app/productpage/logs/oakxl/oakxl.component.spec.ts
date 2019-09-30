import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OakxlComponent } from './oakxl.component';

describe('OakxlComponent', () => {
  let component: OakxlComponent;
  let fixture: ComponentFixture<OakxlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OakxlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OakxlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
