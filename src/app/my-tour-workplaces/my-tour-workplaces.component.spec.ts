import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTourWorkplacesComponent } from './my-tour-workplaces.component';

describe('MyTourWorkplacesComponent', () => {
  let component: MyTourWorkplacesComponent;
  let fixture: ComponentFixture<MyTourWorkplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTourWorkplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTourWorkplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
