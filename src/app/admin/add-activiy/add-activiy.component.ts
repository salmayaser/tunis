import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-activiy',
  templateUrl: './add-activiy.component.html',
  styleUrls: ['./add-activiy.component.css']
})
export class AddActiviyComponent implements OnInit {

  @ViewChild('#embed') ay7aga?: ElementRef

  htmlContent: any
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '50rem',
    minHeight: '20rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['insertVideo','toggleEditorMode']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  data?: string
  constructor(public _http: HttpClient) {
    console.log("sdkjhjd")
    _http.get("http://pixelserver-001-site11.ctempurl.com/files/New%20Text%20Document.txt", { responseType: 'text' as 'json' }).subscribe((data: any) => {
      this.data = data
    })
  }


  ngOnInit(): void {

  }



}
