import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageBuyLsComponent } from './user-page-buy-ls.component';

describe('UserPageBuyLsComponent', () => {
  let component: UserPageBuyLsComponent;
  let fixture: ComponentFixture<UserPageBuyLsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageBuyLsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageBuyLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
