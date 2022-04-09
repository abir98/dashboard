import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurateurComponent } from './restaurateur.component';

describe('RestaurateurComponent', () => {
  let component: RestaurateurComponent;
  let fixture: ComponentFixture<RestaurateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
