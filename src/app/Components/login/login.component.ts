import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent   {

  email=""
  password=""
  errMessage=""
  constructor(private fireAuth:AuthService) { }

  ngOnInit() {}



  register(){
    this.fireAuth.login(this.email,this.password)


  }



  forgotPassword() {
    this.fireAuth.forgotPassword(this.email) 
  }


  signWithGoogle(){
    this.fireAuth.googleSignIn()
  }
}
