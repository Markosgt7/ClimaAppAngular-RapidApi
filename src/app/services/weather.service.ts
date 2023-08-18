import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(cityName: string):Observable<any>{
    return this.http.get(environment.apiUrl,{
      params: new HttpParams()
      .set('q', cityName)
      .set('appid',environment.apiKey)
      .set('units','metric')
      .set('lang','es')
    });
  }
}
