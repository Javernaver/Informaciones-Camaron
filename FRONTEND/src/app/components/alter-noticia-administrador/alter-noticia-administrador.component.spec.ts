import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterNoticiaAdministradorComponent } from './alter-noticia-administrador.component';

describe('AlterNoticiaAdministradorComponent', () => {
  let component: AlterNoticiaAdministradorComponent;
  let fixture: ComponentFixture<AlterNoticiaAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterNoticiaAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterNoticiaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
