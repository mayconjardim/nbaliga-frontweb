import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftPicksTableComponent } from './draft-picks-table.component';

describe('DraftPicksTableComponent', () => {
  let component: DraftPicksTableComponent;
  let fixture: ComponentFixture<DraftPicksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftPicksTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftPicksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
