import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopfalloComponent } from './popfallo.component';

describe('PopfalloComponent', () => {
  let component: PopfalloComponent;
  let fixture: ComponentFixture<PopfalloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopfalloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopfalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
