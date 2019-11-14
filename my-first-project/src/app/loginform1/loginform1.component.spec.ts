import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginform1Component } from './loginform1.component';

describe('Loginform1Component', () => {
  let component: Loginform1Component;
  let fixture: ComponentFixture<Loginform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loginform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loginform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
