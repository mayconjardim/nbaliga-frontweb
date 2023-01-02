import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftClassTableComponent } from './draft-class-table.component';

describe('DraftClassTableComponent', () => {
  let component: DraftClassTableComponent;
  let fixture: ComponentFixture<DraftClassTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftClassTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftClassTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
