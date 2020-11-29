import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaListAdministradorComponent } from './noticia-list-administrador.component';

describe('NoticiaListAdministradorComponent', () => {
  let component: NoticiaListAdministradorComponent;
  let fixture: ComponentFixture<NoticiaListAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaListAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaListAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
