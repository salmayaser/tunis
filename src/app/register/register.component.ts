import { ApisService } from './../_services/apis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = ''
  email: string = ''
  phone: string = ''
  password: string = ''
  confirmPassword: string = ''

  constructor(public _apis: ApisService) { }

  onSubmit() {
    let data = {
      email: this.email,
      userName: this.username,
      phone: this.phone,
      password: this.password,
      confirmPassword: this.confirmPassword,
      role: 0
    }
    this._apis.register(data).subscribe((res) => {
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

}
