import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayoffsStatsTableComponent } from './playoffs-stats-table.component';

describe('PlayoffsStatsTableComponent', () => {
  let component: PlayoffsStatsTableComponent;
  let fixture: ComponentFixture<PlayoffsStatsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayoffsStatsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayoffsStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
