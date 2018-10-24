import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletStaffComponent } from './delet-staff.component';

describe('DeletStaffComponent', () => {
  let component: DeletStaffComponent;
  let fixture: ComponentFixture<DeletStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
