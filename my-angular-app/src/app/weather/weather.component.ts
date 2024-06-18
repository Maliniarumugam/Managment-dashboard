import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    if (this.city.trim()) {
      this.weatherService.getWeatherByCity(this.city.trim()).subscribe(
        data => {
          this.weatherData = data;
          this.errorMessage = '';
        },
        error => {
          this.errorMessage = 'Could not fetch weather data. Please try again.';
          this.weatherData = null;
        }
      );
    }
  }
}
