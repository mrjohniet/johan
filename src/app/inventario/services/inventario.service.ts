import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { from } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { InventarioData } from 'app/models/inventario-data'

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  collectionRef= this.db.collection('inventario');

  constructor(private db: AngularFirestore) { }

  createInventory(formValue) {
    const inventarios = this.collectionRef;
    return from(inventarios.add(formValue))
  }

  modifyInventory(id, changes:Partial<InventarioData>){
    return from(this.collectionRef.doc(id).update(changes));
  }

  deleteInventory(id){
    return from(this.collectionRef.doc(id).delete());
  }

  getAllInventory() {
    const inventarios = this.collectionRef;
    return inventarios.snapshotChanges().pipe(
      map(snaps => {
        return snaps.map( snap => {
            return <InventarioData> {
              id:snap.payload.doc.id,
              ...snap.payload.doc.data() as InventarioData,
            }
          }  
        ) 
      })
    );
  }

  getInventoryById(id:string){
    const document = this.collectionRef.doc(id);
    return document.snapshotChanges().pipe(
      map(
        snap=>{
          return <InventarioData>{
            id:snap.payload.id,
              ...snap.payload.data() as InventarioData
          }
        }
      ),
      take(1)
    ) 
  }

}
