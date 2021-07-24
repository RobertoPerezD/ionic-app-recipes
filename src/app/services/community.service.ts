import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Community} from '../interfaces/interfaces.model'
import { AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore"; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private communityColection: AngularFirestoreCollection<Community>;
  private todos: Observable<Community[]>;

  constructor( private db: AngularFirestore) {
    this.communityColection= db.collection<Community>('community');
    this.todos = this.communityColection.snapshotChanges().pipe(map(
      actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id= a.payload.doc.id;
          return {id, ...data}
        });
      }
    )); 
  } 

  getRecetas(){
    return this.todos;
  }
  
  getReceta(id: string){
   return this.communityColection.doc<Community>(id).valueChanges();
  }
  
  addCarne(todo:Community){
   return this.communityColection.add(todo);
  }
  
  updateCarnes(todo:Community, id: string){
    return this.communityColection.doc(id).update(todo)
  
  }
    
  removeCarne(id:string){
  return this.communityColection.doc(id).delete();
  }
  

   
  

  }