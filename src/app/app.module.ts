import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
