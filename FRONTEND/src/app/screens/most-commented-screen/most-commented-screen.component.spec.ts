import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostCommentedScreenComponent } from './most-commented-screen.component';

describe('MostCommentedScreenComponent', () => {
  let component: MostCommentedScreenComponent;
  let fixture: ComponentFixture<MostCommentedScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostCommentedScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostCommentedScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
