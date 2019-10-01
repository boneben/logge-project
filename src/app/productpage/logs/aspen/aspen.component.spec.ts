import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspenComponent } from './aspen.component';

describe('AspenComponent', () => {
  let component: AspenComponent;
  let fixture: ComponentFixture<AspenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
