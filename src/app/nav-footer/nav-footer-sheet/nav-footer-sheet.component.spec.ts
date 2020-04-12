import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFooterSheetComponent } from './nav-footer-sheet.component';

describe('NavFooterSheetComponent', () => {
  let component: NavFooterSheetComponent;
  let fixture: ComponentFixture<NavFooterSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFooterSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFooterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
