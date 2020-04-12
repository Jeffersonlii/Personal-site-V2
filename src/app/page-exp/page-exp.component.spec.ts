import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExpComponent } from './page-exp.component';

describe('PageExpComponent', () => {
  let component: PageExpComponent;
  let fixture: ComponentFixture<PageExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
