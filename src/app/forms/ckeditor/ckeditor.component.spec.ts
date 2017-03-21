import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeditorComponent } from './ckeditor.component';

describe('CkeditorComponent', () => {
  let component: CkeditorComponent;
  let fixture: ComponentFixture<CkeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
