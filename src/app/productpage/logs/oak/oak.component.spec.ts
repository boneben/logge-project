import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OakComponent } from './oak.component';

describe('OakComponent', () => {
  let component: OakComponent;
  let fixture: ComponentFixture<OakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
