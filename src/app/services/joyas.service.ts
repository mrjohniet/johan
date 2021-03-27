import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JoyasService {

  constructor( private db: AngularFirestore) { }

  getAllJoyas() {
    return this.db.collection('joyas').valueChanges().pipe(
      first()
    );
  }

}
