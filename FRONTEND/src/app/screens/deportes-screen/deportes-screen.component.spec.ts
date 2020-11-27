import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportesScreenComponent } from './deportes-screen.component';

describe('DeportesScreenComponent', () => {
  let component: DeportesScreenComponent;
  let fixture: ComponentFixture<DeportesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeportesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
