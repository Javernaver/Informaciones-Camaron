import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPrivateComponent } from './category-private.component';

describe('CategoryPrivateComponent', () => {
  let component: CategoryPrivateComponent;
  let fixture: ComponentFixture<CategoryPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
