import {
    Component, Input,
} from '@angular/core';

@Component({
    selector: 'app-diary',
    templateUrl: './diary.component.html',
    styleUrls: ['./diary.component.css'],
})
export class DiaryComponent {
    // tslint:disable-next-line:no-input-rename (ts lint kept giving me a red underline so had to disable it here)
    @Input('inputElement') element: {type: string, content: string, day: string};
    @Input() name: string;
    @Input() day: string;

    constructor() {

   // handleUserInput() {
    //     if
    // }
    }
}
