import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWithToolbarPageComponent } from './menu-with-toolbar-page.component';

describe('MenuWithToolbarPageComponent', () => {
  let component: MenuWithToolbarPageComponent;
  let fixture: ComponentFixture<MenuWithToolbarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuWithToolbarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuWithToolbarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
