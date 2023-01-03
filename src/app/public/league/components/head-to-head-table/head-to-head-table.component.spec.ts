import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadToHeadTableComponent } from './head-to-head-table.component';

describe('HeadToHeadTableComponent', () => {
  let component: HeadToHeadTableComponent;
  let fixture: ComponentFixture<HeadToHeadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadToHeadTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadToHeadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
