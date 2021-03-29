import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventarioService } from 'app/inventario/services/inventario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'comprar-articulo',
  templateUrl: './comprar-articulo.component.html',
  styleUrls: ['./comprar-articulo.component.scss']
})
export class ComprarArticuloComponent implements OnInit , AfterViewInit {

  formComprar:FormGroup;
  id;
  articulo;
 
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private inventarioService: InventarioService,
    private router: Router) {
      this.articulo=this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit(): void {
    this.setValidatorsValues();
    
  }

  createForm(){
    this.formComprar = this.fb.group({
      id:['',[Validators.required]],
      precio:[0 ,[Validators.required]],
      cantidad:['',[Validators.required]],
      numeroTarjeta:['',[Validators.required]]
    })
  }

  setValidatorsValues(){
    if(this.articulo){
      this.formComprar.controls.cantidad.setValidators([Validators.required,Validators.max(this.articulo.existencias)]);
      this.formComprar.controls.id.setValue(this.articulo.id);
    }
  }

  changeCantidad(){
    this.formComprar.controls.precio.setValue(
      this.formComprar.controls.cantidad.value * 
      this.articulo.precioUnitario
      );
  }

  get precioTotal(){
    return this.formComprar.controls.precio;
  }

  submit(){
    const changes = this.articulo;
    if(this.formComprar.valid){
      changes.existencias -= this.formComprar.controls.cantidad.value;
      this.inventarioService.modifyInventory(this.articulo.id, changes).subscribe(
        res => {
          this.snackBar.open(
            `La compra de ${this.articulo.nombre} ha sido realizada exitosamente. Se dedujeron ${this.formComprar.controls.cantidad.value} unidades`,
            '',
            {duration:3000, panelClass: ['green-snackbar']}
          )
          this.router.navigate(['/']);
        }
      )
    }
  }

  cancelar(){
    this.router.navigate(['/']);
  }

}
