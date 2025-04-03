import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponents } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponents;
  let fixture: ComponentFixture<UserDetailsComponents>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponents]
    });
    fixture = TestBed.createComponent(UserDetailsComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
