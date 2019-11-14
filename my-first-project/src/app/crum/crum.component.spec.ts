import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrumComponent } from './crum.component';

describe('CrumComponent', () => {
  let component: CrumComponent;
  let fixture: ComponentFixture<CrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
