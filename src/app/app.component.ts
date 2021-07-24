import { Component} from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service';
import {GooglePlus} from "@ionic-native/google-plus/ngx";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authservice:AuthService,
    public google:GooglePlus,
    public alertCtrl: AlertController
    
     
    
  ) {
    this.initializeApp()
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.changeDarkMode();
    });
  }

  logout(){
    this.authservice.logout();
   
}

 

changeDarkMode(){
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDark.matches){
  document.body.classList.toggle('dark');
    }
   }


   async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Cooks Nest',
      subHeader: 'Versión 1.0',
      message: 'Copyright ©2020. Todos los derechos reservados',
      buttons: ['OK'] 
    }); 

    await alert.present();
  }

}
