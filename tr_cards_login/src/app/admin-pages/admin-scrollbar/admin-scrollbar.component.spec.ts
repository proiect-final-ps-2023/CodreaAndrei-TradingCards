import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScrollbarComponent } from './admin-scrollbar.component';

describe('AdminScrollbarComponent', () => {
  let component: AdminScrollbarComponent;
  let fixture: ComponentFixture<AdminScrollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScrollbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
