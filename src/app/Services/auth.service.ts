import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider,FacebookAuthProvider,GithubAuthProvider } from '@angular/fire/auth';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth,private router:Router) { }




  // Login

  login(email:string,password:string)  {
    this.fireAuth.signInWithEmailAndPassword(email,password).then((res)=>{

      localStorage.setItem('connected','true')
      this.router.navigate(['home'])

      if(res.user?.emailVerified == true) {
        this.router.navigate(['home'])

      }
      else {
        this.router.navigate(['verify_email'])

      }
    },err=>{
      alert("something wrong")
      this.router.navigate(['login'])

    })
  }

  //Register User
  register(email:string,password:string)  {
    this.fireAuth.createUserWithEmailAndPassword(email,password).then((res)=>{

      this.router.navigate(['login'])
      this.sendEmailVerification(res.user)
    },err=>{
      alert("something wrong")
    })
  }

   //Logout User
   logout()  {
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('connected')
      this.router.navigate(['login'])
    },err=>{
      alert("something wrong")
    })
  }

  //forgot password 

  forgotPassword(email:string) {

    this.fireAuth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['verify_email'])

    },err=>{
      alert("something went  wrong . Not able to send Email ")
    })
  }


  // Email Verfification

  sendEmailVerification(user:any) {

    user.sendEmailVerification().then(()=>{
      this.router.navigate(['verify_email'])
    },(err:any) =>{
      alert("something went  wrong . Not able to send Email")
    })
  }


  //Sign in with google 
  googleSignIn(){
    this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(res => {
      this.router.navigate(['home'])
      localStorage.setItem('connected','true')
      
    },err=>{
      alert(err.message)
    })
  }
}
