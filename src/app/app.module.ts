import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';




//firebase config
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore"; //Modulo Firestore (BD)
import { AngularFireAuthModule } from "@angular/fire/auth";  //Modulo de authenticacion
import { AngularFireModule } from "@angular/fire";            //Modulo para inicializar y que todo funcione bien vergas
import { firebaseConfig} from "../environments/environment";     // aqui se encuentra una variable de configuracion para inicializar firebase


import {GooglePlus} from "@ionic-native/google-plus/ngx";
import { RecetasDetalleComponent } from './component/recetas-detalle/recetas-detalle.component';
import { CarnesDetalleComponent } from './component/carnes-detalle/carnes-detalle.component';
import { PastasDetalleComponent } from './component/pastas-detalle/pastas-detalle.component';
import { PescadosDetalleComponent } from './component/pescados-detalle/pescados-detalle.component';
import { PostresDetalleComponent } from './component/postres-detalle/postres-detalle.component';



@NgModule({
  declarations: [AppComponent, RecetasDetalleComponent, CarnesDetalleComponent, PastasDetalleComponent,PescadosDetalleComponent, PostresDetalleComponent],
  entryComponents: [RecetasDetalleComponent, CarnesDetalleComponent, PastasDetalleComponent, PescadosDetalleComponent, PostresDetalleComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ], 
  providers: [
    StatusBar,
    GooglePlus,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
