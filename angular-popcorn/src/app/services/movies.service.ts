import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResponse } from '../models/interfaces/movie.interface';
import { MoviesPopularResponse } from '../models/interfaces/movies-popular.interface';

const movieUrl = `${environment.apiBaseUrl}/movie`;


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<MoviesPopularResponse> {
    return this.http.get<MoviesPopularResponse>(`${movieUrl}/popular?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }

  getMovie(id: string) {
    return this.http.get<MovieResponse>(`${movieUrl}/${id}?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }
}
