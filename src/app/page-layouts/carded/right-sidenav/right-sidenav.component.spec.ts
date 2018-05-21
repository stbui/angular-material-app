import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidenavComponent } from './right-sidenav.component';

describe('RightSidenavComponent', () => {
  let component: RightSidenavComponent;
  let fixture: ComponentFixture<RightSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
