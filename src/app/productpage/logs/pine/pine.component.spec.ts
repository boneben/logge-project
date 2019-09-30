import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PineComponent } from './pine.component';

describe('PineComponent', () => {
  let component: PineComponent;
  let fixture: ComponentFixture<PineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
