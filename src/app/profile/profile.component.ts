import { ApisService } from 'src/app/_services/apis.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile?: Profile

  constructor(public _apis: ApisService) {
    this.getProfile()

  }
  getProfile() {
    this._apis.getProfile().subscribe((profile: any) => {
      if (profile.succeeded == true) {
        this.profile = profile.data
        console.log(this.profile)
      }
    })
  }

  ngOnInit(): void {
  }

}
