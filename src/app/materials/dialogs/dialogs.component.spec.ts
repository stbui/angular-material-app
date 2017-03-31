import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsComponent } from './dialogs.component';

describe('DialogsComponent', () => {
  let component: DialogsComponent;
  let fixture: ComponentFixture<DialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
