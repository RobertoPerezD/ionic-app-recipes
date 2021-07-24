import { Component, OnInit } from '@angular/core';
import {PostreService} from '../../services/postre.service'
import {AuthService,} from '../../services/auth.service';
import {ModalController} from '@ionic/angular';
import { PostresDetalleComponent } from '../../component/postres-detalle/postres-detalle.component'
import { AngularFirestore} from "@angular/fire/firestore"; 
import {first}  from 'rxjs/operators';


@Component({
  selector: 'app-postre',
  templateUrl: './postre.page.html',
  styleUrls: ['./postre.page.scss'],
})
export class PostrePage implements OnInit { 

  public postres: any =[];
  constructor( private postreServicie: PostreService, public authservice:AuthService, private modal:ModalController, private firestore: AngularFirestore) { }
  
   async ngOnInit() {
    this.postreServicie.getPostres().subscribe(postres =>{
      this.postres= postres;
  })

  this.postres=await this.initializeItems();
 
} 

openPostre(postre){
  this.modal.create({
    component:PostresDetalleComponent,
    componentProps:{
      title:postre.title,
      img:postre.img,
      instructions:postre.instructions,
      ingredients: postre.ingredients,
      difficulty: postre.difficulty,
      time: postre.time
    }
  }).then((modal)=>modal.present()) 

}

async initializeItems(): Promise<any>{
  const postres= await this.firestore.collection('postres').valueChanges().pipe(first()).toPromise();
  return postres;
}

async filterList(evt){
   this.postres = await this.initializeItems();
   const searchTerm= evt.srcElement.value;

   if (!searchTerm){
     return; 
   }

   this.postres=this.postres.filter(postres=>{
     if(postres.title && searchTerm){
       return (postres.title.toLowerCase().indexOf(searchTerm.toLowerCase())> -1)
     }
     
     
   })
}




}
