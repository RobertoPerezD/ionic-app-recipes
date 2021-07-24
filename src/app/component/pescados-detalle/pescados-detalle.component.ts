import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController} from '@ionic/angular';

@Component({
  selector: 'app-pescados-detalle',
  templateUrl: './pescados-detalle.component.html',
  styleUrls: ['./pescados-detalle.component.scss'],
})
export class PescadosDetalleComponent implements OnInit {
  public title: string; 
  public img: string;
  public instructions:string;
  public ingredients:string;
  public difficulty: string;
  public time: string;
  constructor(private navparams:NavParams, private modal: ModalController) { }

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
