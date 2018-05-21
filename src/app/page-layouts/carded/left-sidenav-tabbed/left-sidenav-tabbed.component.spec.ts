import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidenavTabbedComponent } from './left-sidenav-tabbed.component';

describe('LeftSidenavTabbedComponent', () => {
  let component: LeftSidenavTabbedComponent;
  let fixture: ComponentFixture<LeftSidenavTabbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSidenavTabbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidenavTabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
