import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiariesComponent } from './diaries/diaries.component';


@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiariesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
