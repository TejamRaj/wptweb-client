import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaavbarComponent } from './naavbar.component';

describe('NaavbarComponent', () => {
  let component: NaavbarComponent;
  let fixture: ComponentFixture<NaavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
