import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversorComponent } from './coversor.component';

describe('CoversorComponent', () => {
  let component: CoversorComponent;
  let fixture: ComponentFixture<CoversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoversorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
