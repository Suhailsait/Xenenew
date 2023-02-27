import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createprop2Component } from './createprop2.component';

describe('Createprop2Component', () => {
  let component: Createprop2Component;
  let fixture: ComponentFixture<Createprop2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Createprop2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createprop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
