import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArticuloComponent } from './card-articulo.component';

describe('CardArticuloComponent', () => {
  let component: CardArticuloComponent;
  let fixture: ComponentFixture<CardArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
