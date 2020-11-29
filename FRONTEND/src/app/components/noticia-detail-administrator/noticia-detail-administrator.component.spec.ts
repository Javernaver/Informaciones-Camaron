import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDetailAdministratorComponent } from './noticia-detail-administrator.component';

describe('NoticiaDetailAdministratorComponent', () => {
  let component: NoticiaDetailAdministratorComponent;
  let fixture: ComponentFixture<NoticiaDetailAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaDetailAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaDetailAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
