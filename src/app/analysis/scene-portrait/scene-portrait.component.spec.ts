import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenePortraitComponent } from './scene-portrait.component';

describe('ScenePortraitComponent', () => {
  let component: ScenePortraitComponent;
  let fixture: ComponentFixture<ScenePortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenePortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenePortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
