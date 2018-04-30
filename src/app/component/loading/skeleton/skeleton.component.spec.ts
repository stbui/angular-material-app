import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonComponent } from './skeleton.component';

describe('SkeletonComponent', () => {
  let component: SkeletonComponent;
  let fixture: ComponentFixture<SkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
