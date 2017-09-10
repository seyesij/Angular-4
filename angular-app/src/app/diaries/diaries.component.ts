import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diaries',
  // template: `
  // <app-diary></app-diary>`,
  templateUrl: './diaries.component.html',
  styleUrls: ['./diaries.component.css']
})
export class DiariesComponent implements OnInit {
  post = 'test';
  userInput = '';
  inputLength = false;

  constructor() {}

  ngOnInit() {
  }

  onUserInput(e: any) {
    this.inputLength = true;
    console.log(this.inputLength);
    this.userInput = (<HTMLInputElement>event.target).value;

  }
}
