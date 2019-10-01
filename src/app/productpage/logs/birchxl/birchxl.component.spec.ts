import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirchxlComponent } from './birchxl.component';

describe('BirchxlComponent', () => {
  let component: BirchxlComponent;
  let fixture: ComponentFixture<BirchxlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirchxlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirchxlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
