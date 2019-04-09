import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationItemsPerPageComponent } from './pagination-items-per-page.component';

describe('PaginationItemsPerPageComponent', () => {
  let component: PaginationItemsPerPageComponent;
  let fixture: ComponentFixture<PaginationItemsPerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationItemsPerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationItemsPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
