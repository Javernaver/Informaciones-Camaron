import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodistaScreenComponent } from './periodista-screen.component';

describe('PeriodistaScreenComponent', () => {
  let component: PeriodistaScreenComponent;
  let fixture: ComponentFixture<PeriodistaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodistaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodistaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
