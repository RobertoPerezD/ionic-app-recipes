import { Injectable } from '@angular/core';
import { AngularFirestore} from "@angular/fire/firestore"; 
import { map } from 'rxjs/operators';
import {pescados} from '../interfaces/interfaces.model'

@Injectable({
  providedIn: 'root'
})
export class PescadoService {
  
  constructor(private db: AngularFirestore) { }
  getPescados(){
    return this.db.collection('pescados').snapshotChanges().pipe(map(rooms=>{
      return rooms.map(a=>{
        const data= a.payload.doc.data() as pescados;
        data.id=a.payload.doc.id;
        return data;
      })
    }))
  }

  

}
  