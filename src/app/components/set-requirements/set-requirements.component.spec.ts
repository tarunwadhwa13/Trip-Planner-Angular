import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRequirementsComponent } from './set-requirements.component';

describe('SetRequirementsComponent', () => {
  let component: SetRequirementsComponent;
  let fixture: ComponentFixture<SetRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
