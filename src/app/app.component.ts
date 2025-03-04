
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather-data.model';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  weather: WeatherData | null = null;  // ✅ Initialize with null
  iconUrl: string = '';

  constructor(private weatherService: WeatherService) {}
  
  cityName?: string;
  weatherData?: WeatherData;


  ngOnInit(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error("Geolocation not available");
    }
  }

  onSubmit() {
    if (this.cityName) {
      this.weatherService.getWeatherByCityName(this.cityName).subscribe(
        (data: WeatherData) => {
          this.weather = data;
          this.iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        },
        (error) => {
          console.error("Error fetching weather data", error);
        }
      );
    }
  }
  getWeather(latitude: number, longitude: number): void {
    this.weatherService.getWeather(latitude, longitude).subscribe(
      (data: WeatherData) => {
        this.weather = data;
        this.iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      },
      (error) => {
        console.error("Error fetching weather data", error);
      }
    );
  }
}
