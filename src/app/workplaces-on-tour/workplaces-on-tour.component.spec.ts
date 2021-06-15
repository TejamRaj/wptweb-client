import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplacesOnTourComponent } from './workplaces-on-tour.component';

describe('WorkplacesOnTourComponent', () => {
  let component: WorkplacesOnTourComponent;
  let fixture: ComponentFixture<WorkplacesOnTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkplacesOnTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplacesOnTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
