import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVisitasComponent } from './top-visitas.component';

describe('TopVisitasComponent', () => {
  let component: TopVisitasComponent;
  let fixture: ComponentFixture<TopVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopVisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
