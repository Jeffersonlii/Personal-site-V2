import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandImgComponent } from './expand-img.component';

describe('ExpandImgComponent', () => {
  let component: ExpandImgComponent;
  let fixture: ComponentFixture<ExpandImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
