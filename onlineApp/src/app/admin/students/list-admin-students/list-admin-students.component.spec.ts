import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminStudentsComponent } from './list-admin-students.component';

describe('ListAdminStudentsComponent', () => {
  let component: ListAdminStudentsComponent;
  let fixture: ComponentFixture<ListAdminStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAdminStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdminStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
