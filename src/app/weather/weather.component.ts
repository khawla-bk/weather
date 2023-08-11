import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  windSpeed: number = 0;
  description: string = '';
  iconURL: string = '';
  city: string = 'Tunis';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather(this.city).subscribe({

      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.description = this.myWeather.weather[0].description;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.windSpeed = this.myWeather.wind.speed;
        
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
    })
  }

}
