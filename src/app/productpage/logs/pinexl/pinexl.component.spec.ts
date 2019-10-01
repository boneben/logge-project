import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinexlComponent } from './pinexl.component';

describe('PinexlComponent', () => {
  let component: PinexlComponent;
  let fixture: ComponentFixture<PinexlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinexlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinexlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
