import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayoffsTableComponent } from './playoffs-table.component';

describe('PlayoffsTableComponent', () => {
  let component: PlayoffsTableComponent;
  let fixture: ComponentFixture<PlayoffsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayoffsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayoffsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
