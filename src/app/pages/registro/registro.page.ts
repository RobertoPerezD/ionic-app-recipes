import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string;
  password: string;
  name: string

  constructor( private auth: AuthService, private router: Router, private menu: MenuController) { }

  ngOnInit() {
  }
 
  onSubmitRegister()
  {
    this.auth.register(this.email, this.password, this.name).then( auth=>{
      this.router.navigate(['/recetas']);
     console.log(this.auth)
    }).catch(err =>console.log(err))
  
  }

  
  ionViewDidEnter() { 
    // the root left menu should be disabled on this page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menu.enable(true);
  }
  
}




