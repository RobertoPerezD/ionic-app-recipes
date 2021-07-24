import { Component, OnInit } from '@angular/core';
import {CommunityService} from '../../services/community.service';
import { ModalController, NavController } from '@ionic/angular'; 
import { AngularFirestore} from "@angular/fire/firestore"; 
@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  public community: any =[];
  constructor(private comunnityService: CommunityService, private modal:ModalController, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.comunnityService.getRecetas().subscribe(recetas =>{
      this.community= recetas;
      })
  }

}
 