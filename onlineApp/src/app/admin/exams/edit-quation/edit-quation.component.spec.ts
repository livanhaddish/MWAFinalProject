import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuationComponent } from './edit-quation.component';

describe('EditQuationComponent', () => {
  let component: EditQuationComponent;
  let fixture: ComponentFixture<EditQuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
