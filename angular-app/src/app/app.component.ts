import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dan and Seyes awesome Angular';
  postData = [];


onDiaryPostSubmit(diaryPost: {diaryText: string}) {
  this.postData.push({
    // type: 'post',
    content: diaryPost.diaryText,
  });
}

}
