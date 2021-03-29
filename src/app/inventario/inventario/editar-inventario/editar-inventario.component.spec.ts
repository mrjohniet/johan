import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInventarioComponent } from './editar-inventario.component';

describe('EditarInventarioComponent', () => {
  let component: EditarInventarioComponent;
  let fixture: ComponentFixture<EditarInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
