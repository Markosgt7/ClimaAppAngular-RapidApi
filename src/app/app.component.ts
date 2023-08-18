import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AppClima-RapidApi';
  min: number = 0;
  max: number = 0;
  viento: number = 0;
  humedad: number = 0;
  clima: any;
  icono: string = '';
  ciudad_consulta: string = '';


  constructor(private weatherService: WeatherService){}

  ngOnInit():void{
    this.weatherService.getWeather('guatemala').subscribe({
      next:(response)=>{
        console.log(response);  

      },
      error: (err) => console.info('Error',err.message),
    })
  }
}
