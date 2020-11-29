import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateNewsScreenComponent } from './private-news-screen.component';

describe('PrivateNewsScreenComponent', () => {
  let component: PrivateNewsScreenComponent;
  let fixture: ComponentFixture<PrivateNewsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateNewsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateNewsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
