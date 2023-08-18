import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AppClima-RapidApi';
  temperatura: number = 0;
  min: number = 0;
  max: number = 0;
  viento: number = 0;
  humedad: number = 0;
  clima: any;
  icono: string = '';
  ciudad_consulta: string = 'Guatemala';
  nombre_ciudad: string = '';
  descripcion_clima = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.obtenerDatosClima(this.ciudad_consulta);
  }

  onSubmit() {
    this.obtenerDatosClima(this.ciudad_consulta);
    this.nombre_ciudad = '';
  }

  private obtenerDatosClima(ciudad_consulta: string) {
    this.weatherService.getWeather(ciudad_consulta).subscribe({
      next: (response) => {
        console.log(response);
        this.clima = response;
        this.min = this.clima.main.temp_min;
        this.max = this.clima.main.temp_max;
        this.humedad = this.clima.main.humidity;
        this.viento = this.clima.wind.speed;
        this.nombre_ciudad = this.clima.name;
        this.temperatura = this.clima.main.temp;
        this.descripcion_clima = this.clima.weather[0].description;
      },
      error: (err) => console.info('Error', err.message),
    });
  }
}
