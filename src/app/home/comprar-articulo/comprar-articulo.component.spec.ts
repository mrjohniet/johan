import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarArticuloComponent } from './comprar-articulo.component';

describe('ComprarArticuloComponent', () => {
  let component: ComprarArticuloComponent;
  let fixture: ComponentFixture<ComprarArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprarArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
