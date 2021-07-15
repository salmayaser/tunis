import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base = 'http://pixelserver-001-site11.ctempurl.com';

  constructor(public _http: HttpClient) { }

  currentEmail?: string

  login(data: any) {
    return this._http.post(`${this.base}/Api/Account/GetToken`, data)
  }

  sendCode(data: any) {
    return this._http.post(`${this.base}/Api/Account/SendCode`, data)
  }
  forgetPassword(data: any) {
    return this._http.post(`${this.base}/Api/Account/ForgetPassword`, data)
  }


}
