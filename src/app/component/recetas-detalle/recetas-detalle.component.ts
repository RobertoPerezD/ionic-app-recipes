import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController} from '@ionic/angular';

@Component({
  selector: 'app-recetas-detalle',
  templateUrl: './recetas-detalle.component.html',
  styleUrls: ['./recetas-detalle.component.scss'],
})
export class RecetasDetalleComponent implements OnInit {
  public title: string; 
  public img: string;
  public instructions:string;
  public ingredients:string;
  
  constructor( private navparams:NavParams, private modal: ModalController) { }

  ngOnInit() {
 this.title= this.navparams.get('title')
 this.img= this.navparams.get('img')
 this.instructions=this.navparams.get('instructions')
 this.ingredients=this.navparams.get('ingredients')

  }

  closeRecetas(){
    this.modal.dismiss()
  }

} 
 