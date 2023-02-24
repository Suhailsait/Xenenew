import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createprop1Component } from './createprop1.component';

describe('Createprop1Component', () => {
  let component: Createprop1Component;
  let fixture: ComponentFixture<Createprop1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Createprop1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createprop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
