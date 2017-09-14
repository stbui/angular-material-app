import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmComponent } from './crm.component';

describe('CrmComponent', () => {
  let component: CrmComponent;
  let fixture: ComponentFixture<CrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
