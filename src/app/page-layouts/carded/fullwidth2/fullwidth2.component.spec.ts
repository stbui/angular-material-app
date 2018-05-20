import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fullwidth2Component } from './fullwidth2.component';

describe('Fullwidth2Component', () => {
  let component: Fullwidth2Component;
  let fixture: ComponentFixture<Fullwidth2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fullwidth2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fullwidth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
