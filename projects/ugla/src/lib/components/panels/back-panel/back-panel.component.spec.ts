import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPanelComponent } from './back-panel.component';

describe('BackPanelComponent', () => {
  let component: BackPanelComponent;
  let fixture: ComponentFixture<BackPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
