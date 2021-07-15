import { ApisService } from './../_services/apis.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  loader = false
  constructor(public _auth: AuthService, public router: Router, public _apis: ApisService) { }

  @ViewChild('email') email?: ElementRef

  sendVerificationCode() {
    this.loader = true
    let email = this.email?.nativeElement.value;
    let data = {
      toEmail: email
    }
    this._auth.sendCode(data).subscribe((res: any) => {
      console.log(res)
      if (res.succeeded) {
        this._auth.currentEmail = email
        this.router.navigate(['/code'])
      }
    })

  }

  ngOnInit(): void {
  }

}
