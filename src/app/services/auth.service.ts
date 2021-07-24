import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {GooglePlus} from "@ionic-native/google-plus/ngx";
import { auth } from 'firebase';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router, private db : AngularFirestore, private google:GooglePlus,public platform: Platform ) { }

  login(email:string, password:string) {  
 return new Promise((resolve, rejected)=>{
   this.AFauth.auth.signInWithEmailAndPassword(email,password).then(user=>{
     resolve (user);
   }).catch(err=> rejected(err));
 });

  }
 
  logout(){
    this.AFauth.auth.signOut().then(()=>{
      this.google.disconnect();
      this.router.navigate(['./login'])
    });
    
  }

  register(email : string, password : string, name:string ){

    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then( res =>{   
      const uid= res.user.uid
      this.db.collection('users').doc(uid).set({
        name:name,
        uid:uid
      })
       resolve(res)
      }).catch( err => reject(err))
    })
  }
  
loginwithGoogle(){
 if(this.platform.is('cordova')){
 return this.google.login({}).then(result=>{
    const user_data_google=result;
   return this.AFauth.auth.signInWithCredential(auth.GoogleAuthProvider.credential(null, user_data_google.accessToken
    
    ))
  })  
}else {
  return this.AFauth.auth.signInWithPopup(new auth.GoogleAuthProvider)
}
}

getUserAut(){
 return this.AFauth.authState
}



}

