import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarHelpComponent } from './toolbar-help.component';

describe('ToolbarHelpComponent', () => {
  let component: ToolbarHelpComponent;
  let fixture: ComponentFixture<ToolbarHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
