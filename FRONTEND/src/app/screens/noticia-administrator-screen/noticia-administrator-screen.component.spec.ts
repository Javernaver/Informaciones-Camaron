import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaAdministratorScreenComponent } from './noticia-administrator-screen.component';

describe('NoticiaAdministratorScreenComponent', () => {
  let component: NoticiaAdministratorScreenComponent;
  let fixture: ComponentFixture<NoticiaAdministratorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaAdministratorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaAdministratorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
