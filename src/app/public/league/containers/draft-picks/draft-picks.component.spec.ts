import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftPicksComponent } from './draft-picks.component';

describe('DraftPicksComponent', () => {
  let component: DraftPicksComponent;
  let fixture: ComponentFixture<DraftPicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftPicksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
