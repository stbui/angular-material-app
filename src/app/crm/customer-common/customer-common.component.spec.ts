import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCommonComponent } from './customer-common.component';

describe('CustomerCommonComponent', () => {
  let component: CustomerCommonComponent;
  let fixture: ComponentFixture<CustomerCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
