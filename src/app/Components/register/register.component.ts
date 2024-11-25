import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  email=""
  password=""

  constructor(private fireAuth:AuthService) { }

  ngOnInit() {}



  register(){
    this.fireAuth.register(this.email,this.password)
  }
}
