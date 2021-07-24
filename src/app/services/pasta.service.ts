import { Injectable } from '@angular/core';
import { AngularFirestore} from "@angular/fire/firestore"; 
import { map } from 'rxjs/operators';
import {pastas} from '../interfaces/interfaces.model'


 
@Injectable({
  providedIn: 'root'
})
export class PastaService {
 

  constructor(private db: AngularFirestore) { }
  getPastas(){
    return this.db.collection('pastas').snapshotChanges().pipe(map(rooms=>{
      return rooms.map(a=>{
        const data= a.payload.doc.data() as pastas;
        data.id=a.payload.doc.id;
        return data;
      })
    }))
  }

  
}


