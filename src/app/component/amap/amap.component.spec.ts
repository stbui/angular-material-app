import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmapComponent } from './amap.component';

describe('AmapComponent', () => {
  let component: AmapComponent;
  let fixture: ComponentFixture<AmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
