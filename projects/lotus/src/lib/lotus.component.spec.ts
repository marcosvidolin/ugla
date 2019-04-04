import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotusComponent } from './lotus.component';

describe('LotusComponent', () => {
  let component: LotusComponent;
  let fixture: ComponentFixture<LotusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
