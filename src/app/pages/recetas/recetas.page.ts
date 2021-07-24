import { Component, OnInit, ViewChild} from '@angular/core';
import {RecetasService} from '../../services/recetas.service';
import {AuthService,} from '../../services/auth.service';
import {ModalController} from '@ionic/angular';
import { RecetasDetalleComponent } from '../../component/recetas-detalle/recetas-detalle.component'
import { AngularFirestore} from "@angular/fire/firestore"; 
import {first}  from 'rxjs/operators';
import { IonSlides } from '@ionic/angular';

 

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

@ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

darkMode: boolean = true;
public recetas: any =[];
public populares: any=[];
public user: any=[];
sliderOne: any;
name: string;



 //Configuration for each Slider
 slideOptsOne = {
  initialSlide: 0,
  slidesPerView: 1,
  autoplay: true
};
  constructor(private recetasService: RecetasService, public authservice:AuthService, private modal:ModalController, private firestore: AngularFirestore) 
  { 
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;

    //Item object for Nature
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
    };

  this.authservice.getUserAut().subscribe(user => {
    this.name=user.displayName;
  })

  }
  

  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

   //Method called when slide is changed by drag or navigation
   SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }


  async ngOnInit() {
   
    this.recetasService.getRecetas().subscribe(recetas =>{
    this.recetas= recetas;
    })

    this.recetasService. getMasRecetas().subscribe(populares=>{
    this.populares=populares;
    })

    this.recetas=await this.initializeItems();

    }
    
    openReceta(receta){
      this.modal.create({
        component:RecetasDetalleComponent,
        componentProps:{
          title:receta.title,
          img:receta.img,
          instructions:receta.instructions,
          ingredients: receta.ingredients
        }
      }).then((modal)=>modal.present()) 

    }
    
    openPopulares(populares){
      this.modal.create({
        component:RecetasDetalleComponent,
        componentProps:{
          title:populares.title,
          img:populares.img,
          instructions:populares.instructions,
          ingredients:populares.ingredients
  
        }
      }).then((modal)=>modal.present()) 

    }



    logout(){
      this.authservice.logout();   
  }

  // funcion para cambiar el modo desde el toggle
change() {
  this.darkMode = !this.darkMode;
  document.body.classList.toggle('dark');
   }
  
  
  async initializeItems(): Promise<any>{
    const recetas= await this.firestore.collection('recetas').valueChanges().pipe(first()).toPromise();
    return recetas;
  }

  async filterList(evt){
     this.recetas = await this.initializeItems();
     const searchTerm= evt.srcElement.value;

     if (!searchTerm){
       return; 
     }

     this.recetas=this.recetas.filter(recetas=>{
       if(recetas.title && searchTerm){
         return (recetas.title.toLowerCase().indexOf(searchTerm.toLowerCase())> -1)
       }
       
       
     })

     

    }
  
  
   



  }
  

