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

  constructor() {}

  ngOnInit() {
  }

  onUserInput(e: any) {
    console.log(event);
  }
  
}
