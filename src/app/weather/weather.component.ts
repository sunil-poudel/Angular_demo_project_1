import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  protected readonly onsubmit = onsubmit;
  city:string = '';

  getWeather():void {
    console.log("Getting weather for "+this.city);
  }
}
