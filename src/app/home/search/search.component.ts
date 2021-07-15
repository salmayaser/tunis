import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  adults = 2
  children = 1

  constructor() { }
  emailFormControl = new FormControl('', [

  ]);

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


  open() {

  }



  ngOnInit(): void {
  }

}
