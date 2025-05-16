import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {HttpClient} from '@angular/common/http';

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
  weatherData:any;

  public constructor(private http:HttpClient) {}

  getWeather():void {
    console.log("Getting weather for "+this.city);
    let url:string = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=560efcc8601a06528ad32a770ad48e5e&units=metric`;

    this.http.get(url).subscribe(
      data=>{
        this.weatherData = data;
        console.log(data);
      }
    );
  }
}
