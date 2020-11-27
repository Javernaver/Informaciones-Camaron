import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19ScreenComponent } from './covid19-screen.component';

describe('Covid19ScreenComponent', () => {
  let component: Covid19ScreenComponent;
  let fixture: ComponentFixture<Covid19ScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Covid19ScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
