import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFloatComponent } from './page-float.component';

describe('PageFloatComponent', () => {
  let component: PageFloatComponent;
  let fixture: ComponentFixture<PageFloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
