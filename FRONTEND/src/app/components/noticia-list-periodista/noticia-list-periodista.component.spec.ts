import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaListPeriodistaComponent } from './noticia-list-periodista.component';

describe('NoticiaListPeriodistaComponent', () => {
  let component: NoticiaListPeriodistaComponent;
  let fixture: ComponentFixture<NoticiaListPeriodistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaListPeriodistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaListPeriodistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
