import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoxesComponent } from './project-boxes.component';

describe('ProjectBoxesComponent', () => {
  let component: ProjectBoxesComponent;
  let fixture: ComponentFixture<ProjectBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
