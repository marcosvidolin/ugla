import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideWithBreadcrumbPageComponent } from './aside-with-breadcrumb-page.component';

describe('AsideWithBreadcrumbPageComponent', () => {
  let component: AsideWithBreadcrumbPageComponent;
  let fixture: ComponentFixture<AsideWithBreadcrumbPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideWithBreadcrumbPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideWithBreadcrumbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
