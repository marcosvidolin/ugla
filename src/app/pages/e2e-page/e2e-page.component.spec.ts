import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2ePageComponent } from './e2e-page.component';

describe('E2ePageComponent', () => {
  let component: E2ePageComponent;
  let fixture: ComponentFixture<E2ePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2ePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2ePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
