import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { InventarioService } from 'app/inventario/services/inventario.service';
import { Observable } from 'rxjs';
import { concatMap, last } from 'rxjs/operators';

@Component({
  selector: 'editar-inventario',
  templateUrl: './editar-inventario.component.html',
  styleUrls: ['./editar-inventario.component.scss']
})
export class EditarInventarioComponent implements OnInit {

  
  uploadPercent$ :Observable<number>;
  tallas=[];
  form:FormGroup;
  id;

  constructor(
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private router: Router,
    private inventarioService: InventarioService,
    private snackBar:MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.tallas = ['XS' , 'S','M', 'L' , 'XL' , 'XXL']
    this.id = this.route.snapshot.paramMap.get('id'); 
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      id:[[Validators.required]],
      nombre:['',[Validators.required]],
      existencias:['',[Validators.required]],
      talla:[''],
      precioUnitario:['',[Validators.required]],
      rutaImagen:[]
    })
    
    this.inventarioService.getInventoryById(this.id).subscribe(
        res => this.form.setValue(res)
    )
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
      this.inventarioService.modifyInventory(this.id,this.form.value).subscribe(
        ()=>{
          this.router.navigate(['/gestion-inventario']);
          const message = 'Inventario modificado exitosamente.'
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
