import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletStudentComponent } from './delet-student.component';

describe('DeletStudentComponent', () => {
  let component: DeletStudentComponent;
  let fixture: ComponentFixture<DeletStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
