import { Component, OnInit } from '@angular/core';
import {CarneService} from '../../services/carne.service'
import {AuthService,} from '../../services/auth.service';
import {ModalController} from '@ionic/angular';
import { CarnesDetalleComponent } from '../../component/carnes-detalle/carnes-detalle.component'
import {first}  from 'rxjs/operators';
import { AngularFirestore} from "@angular/fire/firestore"; 


@Component({
  selector: 'app-carne',
  templateUrl: './carne.page.html',
  styleUrls: ['./carne.page.scss'],
})
export class CarnePage implements OnInit {
   
  public carnes: any =[];


  constructor( private carneServicie: CarneService,public authservice:AuthService, private modal: ModalController, private firestore: AngularFirestore) { }
  
  async ngOnInit() {
    this.carneServicie.getCarnes().subscribe(carnes =>{
      this.carnes= carnes;
    })

    this.carnes=await this.initializeItems();
   


  }

  openCarnes(carnes){ 
    this.modal.create({
      component:CarnesDetalleComponent,
      componentProps:{
        title:carnes.title,
        img:carnes.img,
        instructions:carnes.instructions,
        ingredients: carnes.ingredients,
        difficulty: carnes.difficulty,
        time: carnes.time,
      }
    }).then((modal)=>modal.present()) 
 
  }

  async initializeItems(): Promise<any>{
    const carnes= await this.firestore.collection('carnes').valueChanges().pipe(first()).toPromise();
    return carnes;
  }

  async filterList(evt){
     this.carnes = await this.initializeItems();
     const searchTerm= evt.srcElement.value;

     if (!searchTerm){
       return; 
     }

     this.carnes=this.carnes.filter(carnes=>{
       if(carnes.title && searchTerm){
         return (carnes.title.toLowerCase().indexOf(searchTerm.toLowerCase())> -1)
       }
       
       
     })
  }


}
