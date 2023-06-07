import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPagePacksComponent } from './user-page-packs.component';

describe('UserPagePacksComponent', () => {
  let component: UserPagePacksComponent;
  let fixture: ComponentFixture<UserPagePacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPagePacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPagePacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
