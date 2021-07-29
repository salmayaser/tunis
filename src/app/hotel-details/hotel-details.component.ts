import { Hotel } from './../shared/hotel.model';
import { ApisService } from 'src/app/_services/apis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  adults = 1
  children = 0
  hotel: any

  constructor(private _apis: ApisService) {
    this.getHotelDetails()

  }


  addAdult() {
    if (this.adults < 30) {
      this.adults++
    }
  }
  removeAdult() {
    if (this.adults !== 1) {
      this.adults--
    }
  }

  addChild() {
    if (this.children < 30) {
      this.children++
    }
  }
  removeChild() {
    if (this.children !== 0) {
      this.children--
    }
  }


  getHotelDetails() {
    this._apis.getHotelDetails(13).subscribe((hotel: any) => {
      this.hotel = hotel.data
      console.log(this.hotel)
    })
  }


  ngOnInit(): void {
  }

}
