import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplacebookingComponent } from './workplacebooking.component';

describe('WorkplacebookingComponent', () => {
  let component: WorkplacebookingComponent;
  let fixture: ComponentFixture<WorkplacebookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkplacebookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplacebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
