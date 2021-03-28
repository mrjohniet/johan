import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, last } from 'rxjs/operators';
import { InventarioService } from '../../services/inventario.service'

@Component({
  selector: 'crear-inventario',
  templateUrl: './crear-inventario.component.html',
  styleUrls: ['./crear-inventario.component.scss']
})
export class CrearInventarioComponent implements OnInit {

  uploadPercent$ :Observable<number>;
  tallas=[];
  form:FormGroup;

  constructor(
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private router: Router,
    private inventarioService: InventarioService,
    private snackBar:MatSnackBar
  ) {
    this.tallas = ['XS' , 'S','M', 'L' , 'XL' , 'XXL'] 
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      nombre:['',[Validators.required]],
      existencias:['',[Validators.required]],
      talla:[''],
      precioUnitario:['',[Validators.required]],
      rutaImagen:[]
    })
  }

  uploadFile(event){
    const file:File = event.target.files[0];
    const filePath = `inventario/${file.name}`;
    const task = this.storage.upload(filePath,file);
    this.uploadPercent$ = task.percentageChanges();
    
    task.snapshotChanges().pipe(
      last(),
      concatMap(()=> this.storage.ref(filePath).getDownloadURL())
    ).subscribe(
      res => {
        this.form.controls.rutaImagen.setValue(res);
      }
    )
  }

  submit() {
    if(this.form.valid) {
      this.inventarioService.createInventory(this.form.value).subscribe(
        ()=>{
          this.router.navigate(['/gestion-inventario']);
          const message = 'Inventario agregado exitosamente.'
          this.snackBar.open(message,'',{
            duration: 3000,
          });
        }
      )
    }
  }

  cancel() {
    this.router.navigate(['gestion-inventario']);
  }

}
