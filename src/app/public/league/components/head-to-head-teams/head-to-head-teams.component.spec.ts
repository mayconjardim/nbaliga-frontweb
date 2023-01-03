import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadToHeadTeamsComponent } from './head-to-head-teams.component';

describe('HeadToHeadTeamsComponent', () => {
  let component: HeadToHeadTeamsComponent;
  let fixture: ComponentFixture<HeadToHeadTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadToHeadTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadToHeadTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
