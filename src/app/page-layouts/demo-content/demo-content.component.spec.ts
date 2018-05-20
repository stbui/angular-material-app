import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoContentComponent } from './demo-content.component';

describe('DemoContentComponent', () => {
  let component: DemoContentComponent;
  let fixture: ComponentFixture<DemoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
