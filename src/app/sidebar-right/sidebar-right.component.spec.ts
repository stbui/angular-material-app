import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRightComponent } from './sidebar-right.component';

describe('SidebarRightComponent', () => {
  let component: SidebarRightComponent;
  let fixture: ComponentFixture<SidebarRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
