import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=c90235dd8de604fa1fbae98c7f3d7b7d&units=metric');
  }
}
