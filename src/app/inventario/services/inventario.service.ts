import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private db: AngularFirestore) { }

  createInventory(formValue) {
    const inventarios = this.db.collection('inventario');
    return from(inventarios.add(formValue))
  }

  getAllInventory() {
    const inventarios = this.db.collection('inventario');
    return inventarios.snapshotChanges();
  }

}
