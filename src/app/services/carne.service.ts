import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore"; 
import {carnes} from '../interfaces/interfaces.model'
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CarneService {

 private carnesColection: AngularFirestoreCollection<carnes>;
 private todos: Observable<carnes[]>;
  
  constructor( private db: AngularFirestore) { 
     
    this.carnesColection= db.collection<carnes>('carnes');
    this.todos = this.carnesColection.snapshotChanges().pipe(map(
      actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id= a.payload.doc.id;
          return {id, ...data}
        });
      }
    )); 
  } 

getCarnes(){
  return this.todos;
}

getCarne(id: string){
 return this.carnesColection.doc<carnes>(id).valueChanges();
}

addCarne(todo:carnes){
 return this.carnesColection.add(todo);
}

updateCarnes(todo:carnes, id: string){
  return this.carnesColection.doc(id).update(todo)

}
  
removeCarne(id:string){
return this.carnesColection.doc(id).delete();
}

}
