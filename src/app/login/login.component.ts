import { ApisService } from './../_services/apis.service';
import { AuthService } from './../_services/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('email') emailInp?: ElementRef;
  @ViewChild('password') password?: ElementRef;

  constructor(public _auth: AuthService, public _apis: ApisService) {
  }
  login() {

    let email = this.emailInp?.nativeElement.value;
    let password = this.password?.nativeElement.value;
    let data = {
      email: email,
      password: password
    }
    this._auth.login(data).subscribe((res) => {
      console.log(res)
    })

  }



  ngOnInit(): void {
  }

}
