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
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarComponent } from './car/car.component';
import { CarDetailComponent } from './car-detail/car-detail.component';


import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';




@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ListSectionExampleComponent,
    DashboardComponent,
    CarComponent,
    CarDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyMaterialDesignModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation : false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }