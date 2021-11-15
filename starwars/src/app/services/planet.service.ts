import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planet, PlanetResponse } from '../models/interfaces/planet.interface';
const apiUrl = `${environment.apiBase}`;
@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PlanetResponse>{
    return this.http.get<PlanetResponse>(`${apiUrl}/planets`);
  }

  getPlanetsId(id: String): Observable<Planet> {
    return this.http.get<Planet>(`${apiUrl}/planets/${id}`);
  }
}
