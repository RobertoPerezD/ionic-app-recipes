import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController, LoadingController} from '@ionic/angular';
import {carnes} from '../../interfaces/interfaces.model'
import {CarneService} from '../../services/carne.service'

@Component({
  selector: 'app-carnes-detalle',
  templateUrl: './carnes-detalle.component.html',
  styleUrls: ['./carnes-detalle.component.scss'],
})
export class CarnesDetalleComponent implements OnInit {
  public title: string; 
  public img: string;
  public instructions:string;
  public ingredients:string;
  public difficulty: string;
  public time: string;  
  

  constructor(private navparams:NavParams, private modal: ModalController, private carnesService:CarneService,private loadingController:LoadingController) { }

  ngOnInit() {

   
  this.title= this.navparams.get('title')
 this.img= this.navparams.get('img')
 this.instructions=this.navparams.get('instructions')
 this.ingredients=this.navparams.get('ingredients')
 this.difficulty= this.navparams.get('difficulty')
 this.time=this.navparams.get('time')
  }
  
  closeRecetas(){
    this.modal.dismiss()
  }

}
