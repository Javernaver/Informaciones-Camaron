import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaPeriodistaScreenComponent } from './noticia-periodista-screen.component';

describe('NoticiaPeriodistaScreenComponent', () => {
  let component: NoticiaPeriodistaScreenComponent;
  let fixture: ComponentFixture<NoticiaPeriodistaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaPeriodistaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaPeriodistaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
