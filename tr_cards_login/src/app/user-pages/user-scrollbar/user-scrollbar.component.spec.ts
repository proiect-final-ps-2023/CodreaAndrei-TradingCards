import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScrollbarComponent } from './user-scrollbar.component';

describe('UserScrollbarComponent', () => {
  let component: UserScrollbarComponent;
  let fixture: ComponentFixture<UserScrollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserScrollbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
