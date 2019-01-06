import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorComponent } from './behavior.component';

describe('BehaviorComponent', () => {
  let component: BehaviorComponent;
  let fixture: ComponentFixture<BehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
