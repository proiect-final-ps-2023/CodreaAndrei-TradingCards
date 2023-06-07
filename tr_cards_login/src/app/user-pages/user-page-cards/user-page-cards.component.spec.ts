import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageCardsComponent } from './user-page-cards.component';

describe('UserPageCardsComponent', () => {
  let component: UserPageCardsComponent;
  let fixture: ComponentFixture<UserPageCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
