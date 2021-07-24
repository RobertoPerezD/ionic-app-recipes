import { Injectable } from '@angular/core';
import { AngularFirestore} from "@angular/fire/firestore"; 
import { map } from 'rxjs/operators';
import {recetas, populares} from '../interfaces/interfaces.model'

 
@Injectable({
  providedIn: 'root'
})
export class RecetasService {
 
  constructor( private db: AngularFirestore) {} 

  getRecetas(){
    return this.db.collection('recetas').snapshotChanges().pipe(map(rooms=>{ 
      return rooms.map(a=>{
        const data= a.payload.doc.data() as recetas;
        data.id=a.payload.doc.id;
        return data;
      })
    }))
   }

   getMasRecetas(){
    return this.db.collection('populares').snapshotChanges().pipe(map(rooms=>{
      return rooms.map(a=>{
        const data= a.payload.doc.data() as populares;
        data.id=a.payload.doc.id;
        return data;
      })
    }))
   }
  
  
  }

  
  
  
 
 


