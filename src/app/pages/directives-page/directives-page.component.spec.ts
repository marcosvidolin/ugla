import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPageComponent } from './directives-page.component';

describe('DirectivesPageComponent', () => {
  let component: DirectivesPageComponent;
  let fixture: ComponentFixture<DirectivesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
