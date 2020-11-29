import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDetailPeriodistaComponent } from './noticia-detail-periodista.component';

describe('NoticiaDetailPeriodistaComponent', () => {
  let component: NoticiaDetailPeriodistaComponent;
  let fixture: ComponentFixture<NoticiaDetailPeriodistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaDetailPeriodistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaDetailPeriodistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
