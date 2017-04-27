import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayButtonComponent } from './day-button.component';

describe('DayButtonComponent', () => {
  let component: DayButtonComponent;
  let fixture: ComponentFixture<DayButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
