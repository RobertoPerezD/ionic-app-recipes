import { Component, OnInit } from '@angular/core';
import {PescadoService} from  '../../services/pescado.service'
import {AuthService,} from '../../services/auth.service';
import {ModalController} from '@ionic/angular';
import { PescadosDetalleComponent } from '../../component/pescados-detalle/pescados-detalle.component'
import { AngularFirestore} from "@angular/fire/firestore"; 
import {first}  from 'rxjs/operators';

@Component({
  selector: 'app-pescado',
  templateUrl: './pescado.page.html',
  styleUrls: ['./pescado.page.scss'],
})
export class PescadoPage implements OnInit {

  public pescados: any =[];
  constructor( private pescadoServicie: PescadoService, public authservice:AuthService, private modal:ModalController, private firestore: AngularFirestore) { }
  
  async ngOnInit() {
    this.pescadoServicie.getPescados().subscribe(pescados =>{
      this.pescados= pescados;
  })
   
  this.pescados=await this.initializeItems();

  }
  openPescado(pescado){
    this.modal.create({
      component:PescadosDetalleComponent,
      componentProps:{
        title:pescado.title,
        img:pescado.img,
        instructions:pescado.instructions,
        ingredients: pescado.ingredients,
        difficulty: pescado.difficulty,
        time: pescado.time,
      }
    }).then((modal)=>modal.present()) 
  
  }

  async initializeItems(): Promise<any>{
    const pescados= await this.firestore.collection('pescados').valueChanges().pipe(first()).toPromise();
    return pescados;
  }

  async filterList(evt){
     this.pescados = await this.initializeItems();
     const searchTerm= evt.srcElement.value;

     if (!searchTerm){
       return; 
     }

     this.pescados=this.pescados.filter(pescados=>{
       if(pescados.title && searchTerm){
         return (pescados.title.toLowerCase().indexOf(searchTerm.toLowerCase())> -1)
       }
       
       
     })
  }


} 
 