import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterNoticiaAdministratorScreenComponent } from './alter-noticia-administrator-screen.component';

describe('AlterNoticiaAdministratorScreenComponent', () => {
  let component: AlterNoticiaAdministratorScreenComponent;
  let fixture: ComponentFixture<AlterNoticiaAdministratorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterNoticiaAdministratorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterNoticiaAdministratorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
