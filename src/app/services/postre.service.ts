import { Injectable } from '@angular/core';
import { AngularFirestore} from "@angular/fire/firestore"; 
import { map } from 'rxjs/operators'; 
import {postres} from '../interfaces/interfaces.model'


@Injectable({ 
  providedIn: 'root'
})  
export class PostreService {

  constructor( private db: AngularFirestore) {}

  getPostres(){
    return this.db.collection('postres').snapshotChanges().pipe(map(rooms=>{
      return rooms.map(a=>{
        const data= a.payload.doc.data() as postres;
        data.id=a.payload.doc.id;
        return data;
      })
    }))
  }




}
