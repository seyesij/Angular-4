import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diaries',
  // template: `
  // <app-diary></app-diary>`,
  templateUrl: './diaries.component.html',
  styleUrls: ['./diaries.component.css']
})
export class DiariesComponent implements OnInit {
  posts = ['test', 'test test'];
  userPost = 'test';
  userInput = '';

  constructor() {}

  ngOnInit() {
  }

  onUserInput(e: any) {
    this.userInput = (<HTMLInputElement>event.target).value;

  }

  onUserSubmit() {
    this.posts.push(this.userPost);
  }
}
