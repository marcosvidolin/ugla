import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UglaComponent } from './ugla.component';

describe('UglaComponent', () => {
  let component: UglaComponent;
  let fixture: ComponentFixture<UglaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UglaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UglaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
