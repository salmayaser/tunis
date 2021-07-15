
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(public _http: HttpClient) { }

  loader = false
  base = 'http://pixelserver-001-site11.ctempurl.com';


  register(data: any) {
    return this._http.post(`${this.base}/Api/Account/Register`, data)
  }

  getAllActivities() {
    return this._http.get(`${this.base}/Api/Activity/GetAllActivities`)
  }
  getProfile() {
    return this._http.get(`${this.base}/Api/Account/GetProfile`)
  }


}
