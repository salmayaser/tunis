import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  constructor() { }
  adults = 1
  children = 0

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


  ngOnInit(): void {
  }

}
