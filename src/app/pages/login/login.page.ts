import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router, private menu: MenuController) { }

  ngOnInit() {
  }

  doLogin()
  {
    this.authService.login(this.email, this.password).then( () =>{
      this.router.navigate(['/home']);
    }).catch(err => {
      alert('los datos son incorrectos o no existe el usuario');
    })
  }

  onSubmitLogin()
  {
    this.authService.login(this.email, this.password).then( res =>{
      this.router.navigate(['/recetas']);
    }).catch(err => {
      alert('los datos son incorrectos o no existe el usuario');
    })
  
  }
 
  ionViewDidEnter() { 
    // the root left menu should be disabled on this page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menu.enable(true);
  }

  loginGoogle(){
    this.authService.loginwithGoogle().then( () =>{
      this.router.navigate(['/recetas']);
    })
  }
  
}