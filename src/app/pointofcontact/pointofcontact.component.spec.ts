import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointofcontactComponent } from './pointofcontact.component';

describe('PointofcontactComponent', () => {
  let component: PointofcontactComponent;
  let fixture: ComponentFixture<PointofcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointofcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointofcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
