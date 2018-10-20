import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamQuationComponent } from './new-exam-quation.component';

describe('NewExamQuationComponent', () => {
  let component: NewExamQuationComponent;
  let fixture: ComponentFixture<NewExamQuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExamQuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExamQuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
