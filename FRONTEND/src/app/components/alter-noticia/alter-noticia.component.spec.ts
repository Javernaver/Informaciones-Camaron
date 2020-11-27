import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterNoticiaComponent } from './alter-noticia.component';

describe('AlterNoticiaComponent', () => {
  let component: AlterNoticiaComponent;
  let fixture: ComponentFixture<AlterNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
