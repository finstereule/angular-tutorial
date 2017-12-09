import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetuppageComponent } from './setuppage.component';

describe('SetuppageComponent', () => {
  let component: SetuppageComponent;
  let fixture: ComponentFixture<SetuppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetuppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetuppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
