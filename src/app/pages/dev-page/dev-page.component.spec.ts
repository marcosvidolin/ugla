import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevPageComponent } from './dev-page.component';

describe('DevPageComponent', () => {
  let component: DevPageComponent;
  let fixture: ComponentFixture<DevPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
