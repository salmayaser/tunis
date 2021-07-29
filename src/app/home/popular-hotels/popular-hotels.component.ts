import { Hotel } from './../../shared/hotel.model';
import { ApisService } from 'src/app/_services/apis.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-popular-hotels',
  templateUrl: './popular-hotels.component.html',
  styleUrls: ['./popular-hotels.component.css']
})
export class PopularHotelsComponent implements OnInit {

  hotels?: Hotel[];

  constructor(private _apis: ApisService) {
    this.getPopularHotels()
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 20,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  getPopularHotels() {
    this._apis.getPopularHotels().subscribe((hotels: any) => {
      this.hotels = hotels.data
      console.log(Hotel)

    })
  }


  ngOnInit(): void {
  }

}
