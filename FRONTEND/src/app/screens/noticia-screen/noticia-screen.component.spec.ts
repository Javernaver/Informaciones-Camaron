import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaScreenComponent } from './noticia-screen.component';

describe('NoticiaScreenComponent', () => {
  let component: NoticiaScreenComponent;
  let fixture: ComponentFixture<NoticiaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
