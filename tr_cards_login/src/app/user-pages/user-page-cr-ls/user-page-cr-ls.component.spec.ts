import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageCrLsComponent } from './user-page-cr-ls.component';

describe('UserPageCrLsComponent', () => {
  let component: UserPageCrLsComponent;
  let fixture: ComponentFixture<UserPageCrLsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageCrLsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageCrLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
