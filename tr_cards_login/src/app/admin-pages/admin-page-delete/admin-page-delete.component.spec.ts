import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageDeleteComponent } from './admin-page-delete.component';

describe('AdminPageDeleteComponent', () => {
  let component: AdminPageDeleteComponent;
  let fixture: ComponentFixture<AdminPageDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
