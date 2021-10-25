import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesPopularListComponentComponent } from '../movies-popular-list-component/movies-popular-list-component.component';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor() { }

  getMovieList(): Observable<MoviesPopularListResponse> {
    return this.http.get<MoviesPopularListResponse>(`${API_BASE_URL}`)
  }
}
