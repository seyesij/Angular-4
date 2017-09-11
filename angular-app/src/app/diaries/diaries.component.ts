import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-diaries',
  // template: `
  // <app-diary></app-diary>`,
  templateUrl: './diaries.component.html',
  styleUrls: ['./diaries.component.css']
})
export class DiariesComponent implements OnInit {
  // posts = ['test', 'test test'];
  // userPost = 'test';
  userInput = '';
  @Output() postCreated = new EventEmitter<{diaryText: string, day: string}>();
  // @Output() dayCreated = new EventEmitter<{diarytext: string, day: string}>();
  @ViewChild('postInput') postInput: ElementRef;

  constructor() {}

  ngOnInit() {
  }

  onUserSubmit(e: HTMLInputElement) {
    this.postCreated.emit({
      diaryText: e.value,
      day: e.value,
    });
  }

  onUserInput(e: HTMLInputElement) {
    this.userInput = (<HTMLInputElement>event.target).value;
  }
  // onUserSubmit() {
  //   this.posts.push(this.userPost);
  // }
}
