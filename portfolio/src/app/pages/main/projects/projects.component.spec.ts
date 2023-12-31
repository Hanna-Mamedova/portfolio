import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksComponent } from './projects.component';

describe('WorksComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
