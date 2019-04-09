import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { uglaComponent } from './ugla.component';

describe('uglaComponent', () => {
  let component: uglaComponent;
  let fixture: ComponentFixture<uglaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ uglaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(uglaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
