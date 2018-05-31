import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

import  {MyMaterialDesignModule} from './my-material-design/my-material-design.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListSectionExampleComponent } from './list-section-example/list-section-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ListSectionExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyMaterialDesignModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }