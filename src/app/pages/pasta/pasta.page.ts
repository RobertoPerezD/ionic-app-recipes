import { Component, OnInit } from '@angular/core';
import {PastaService} from '../../services/pasta.service'
import {AuthService,} from '../../services/auth.service';
import {ModalController} from '@ionic/angular';
import { PastasDetalleComponent } from '../../component/pastas-detalle/pastas-detalle.component'
import { AngularFirestore} from "@angular/fire/firestore"; 
import {first}  from 'rxjs/operators';


@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
}) 
export class PastaPage implements OnInit {
 
  public pastas: any =[];
  constructor( private recetasService: PastaService, public authservice:AuthService, private modal:ModalController,  private firestore: AngularFirestore) { }
  
  async ngOnInit() {
    this.recetasService.getPastas().subscribe(pastas =>{
      this.pastas= pastas;
  })
  
  this.pastas=await this.initializeItems();

 }
 openPasta(pasta){
  this.modal.create({
    component:PastasDetalleComponent,
    componentProps:{
      title:pasta.title,
      img:pasta.img,
      instructions:pasta.instructions,
      ingredients: pasta.ingredients,
      difficulty: pasta.difficulty,
      time: pasta.time,
    }
  }).then((modal)=>modal.present()) 

}

async initializeItems(): Promise<any>{
  const pastas= await this.firestore.collection('pastas').valueChanges().pipe(first()).toPromise();
  return pastas;
}

async filterList(evt){
   this.pastas = await this.initializeItems();
   const searchTerm= evt.srcElement.value;

   if (!searchTerm){
     return; 
   }

   this.pastas=this.pastas.filter(pastas=>{
     if(pastas.title && searchTerm){
       return (pastas.title.toLowerCase().indexOf(searchTerm.toLowerCase())> -1)
     }
     
     
   })
}




}