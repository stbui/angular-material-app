import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDisplayComponent } from './date-display.component';

describe('DateDisplayComponent', () => {
  let component: DateDisplayComponent;
  let fixture: ComponentFixture<DateDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
