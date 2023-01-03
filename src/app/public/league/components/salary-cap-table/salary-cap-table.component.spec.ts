import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCapTableComponent } from './salary-cap-table.component';

describe('SalaryCapTableComponent', () => {
  let component: SalaryCapTableComponent;
  let fixture: ComponentFixture<SalaryCapTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryCapTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryCapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
