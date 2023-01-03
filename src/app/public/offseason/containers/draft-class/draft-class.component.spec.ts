import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftClassComponent } from './draft-class.component';

describe('DraftClassComponent', () => {
  let component: DraftClassComponent;
  let fixture: ComponentFixture<DraftClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
