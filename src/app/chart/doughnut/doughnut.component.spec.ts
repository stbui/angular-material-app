import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutComponent } from './doughnut.component';

describe('DoughnutComponent', () => {
  let component: DoughnutComponent;
  let fixture: ComponentFixture<DoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
