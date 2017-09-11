import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    ContentChild
} from '@angular/core';

@Component({
    selector: 'app-diary',
    templateUrl: './diary.component.html',
    styleUrls: ['./diary.component.css'],
})
export class DiaryComponent {
    // tslint:disable-next-line:no-input-rename (ts lint kept giving me a red underline so had to disable it here)
    @Input('inputElement') element: {type: string, content: string};
    @Input() name: string;
    @ViewChild('heading') header: ElementRef;
    @ContentChild('diaryContent') paragraph: ElementRef;
    constructor() {

    }
}
    // handleUserInput() {
    //     if
    // }
