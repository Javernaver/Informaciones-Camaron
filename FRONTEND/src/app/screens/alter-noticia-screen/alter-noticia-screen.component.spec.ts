import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterNoticiaScreenComponent } from './alter-noticia-screen.component';

describe('AlterNoticiaScreenComponent', () => {
  let component: AlterNoticiaScreenComponent;
  let fixture: ComponentFixture<AlterNoticiaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterNoticiaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterNoticiaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
