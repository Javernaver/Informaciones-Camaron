import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoticiaScreenComponent } from './new-noticia-screen.component';

describe('NewNoticiaScreenComponent', () => {
  let component: NewNoticiaScreenComponent;
  let fixture: ComponentFixture<NewNoticiaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNoticiaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNoticiaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
