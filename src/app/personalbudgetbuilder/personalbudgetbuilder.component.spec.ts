import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalbudgetbuilderComponent } from './personalbudgetbuilder.component';

describe('PersonalbudgetbuilderComponent', () => {
  let component: PersonalbudgetbuilderComponent;
  let fixture: ComponentFixture<PersonalbudgetbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalbudgetbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalbudgetbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
