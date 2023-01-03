import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCapComponent } from './salary-cap.component';

describe('SalaryCapComponent', () => {
  let component: SalaryCapComponent;
  let fixture: ComponentFixture<SalaryCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryCapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
