import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-password-code',
  templateUrl: './password-code.component.html',
  styleUrls: ['./password-code.component.css']
})
export class PasswordCodeComponent implements OnInit {
  loader = false
  @ViewChild('code') code?: ElementRef
  @ViewChild('password') password?: ElementRef
  constructor(public _auth: AuthService, public router: Router) {
    console.log(_auth.currentEmail)
  }

  forgetPassword() {
    this.loader = true
    let data = {
      email: this._auth.currentEmail,
      code: this.code?.nativeElement.value,
      newPassword: this.password?.nativeElement.value
    }
    this._auth.forgetPassword(data).subscribe((res: any) => {
      if (res.succeeded == true) {
        this.router.navigate(["/login"])
      }
    })
  }

  ngOnInit(): void {
  }

}
