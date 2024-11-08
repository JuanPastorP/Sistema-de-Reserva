import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarMesaComponent } from './seleccionar-mesa.component';

describe('SeleccionarMesaComponent', () => {
  let component: SeleccionarMesaComponent;
  let fixture: ComponentFixture<SeleccionarMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionarMesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
