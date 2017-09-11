# Angular-4 Demo
### Angular is one of the most popular javascript frameworks for creating web apps.

#### Getting started

#### npm install –g @angular/cli - Install the Angular CLI globally

#### ng new <new project> - Create a new project

#### cd <new project>

#### ng serve - Start the app. Navigate to http://localhost:4200/

* Good way to scaffold a new controller " ng g c <your controller here>

* To download, clone the repo, cd in to the folder, npm install,
and just ng serve -o and that will open up on localhost:4200 in your browser

* I liked the simplicity of scaffolding " ng g c 'your component' " just like we've been doing in rails,. And having each files css right there (although didn't spend time doing any). Once we  got a better understanding of a lot of the syntax it started to make more sense. There were a lot more things we wanted to implement but ran out of time, I will definitely come back to angular after this class and learn some more. 

Code snippets:

Disabling button until the user starts typing
```<button 
    (click) = "onUserSubmit(postInput)" 
    [disabled]="!userInput"
    class="btn btn-primary">Add to your ~ diary ~</button>                
<p *ngIf="userInput; else noInput"></p>
    <ng-template #noInput>
    <p> Add some ~ thougtz ~ </p>
</ng-template>
```

Next-
this comes from the main app.comonent.html,
Here links the <app-diaries> right from the app-diaries component,
In the app-diaries component, it states selector as - selector: 'app-diaries',
another way you can set the selector though is (which in this example below would probably make more sense to understand where it is coming from)
```<app-diaries></app-diaries>`,
  templateUrl: './diaries.component.html',
  ```
The actual code from the app.component.html is here -

```<app-diaries (postCreated)="onDiaryPostSubmit($event)"></app-diaries>
    <app-diary *ngFor="let postDat of postData" 
        [inputElement]="postDat" 
        [name]="postDat.name"
        [day]="postDat.day">
    <b #diaryContent> {{postDat.content}}{{postDat.day}} </b>
 ```
Including the postCreated output from the diaries.component.ts class DiariesComponent, and it is inclued in the @Output(), which emits to the onUserSubmit as diaryText e.value, and goes to the onDiaryPostSubmit in the AppComponent, where the content is the diaryPost.diaryText, which then if you look back in the code snippet, there is a 
```
*ngFor loop "let postDat of postData"
```
which calls the previously empty postData array  and adds what the user submit. input eleent is now the new inserted 
```postDat[inputElement]="postDat",
```
and the "name" which is here referenced in 
```
<b #diaryContent> {{postDat.content}}{{postDat.day}} </b>
```
calls that name.
```export class DiariesComponent implements OnInit {
  userInput = '';
  @Output() postCreated = new EventEmitter<{diaryText: string, day: string}>();
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
  ```


```export class AppComponent {
  title = 'Dan and Seyes awesome Angular';
  postData = [];


onDiaryPostSubmit(diaryPost: {diaryText: string}) {
  this.postData.push({
    // type: 'post',
    content: diaryPost.diaryText,
    day: diaryPost.diaryText,
    });
  }
}
```
