import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddMovieDto, ListLoginDto, MarkFavoriteDto } from '../models/dto/list.dto';
import { AuthLoginResponse } from '../models/interfaces/auth-login.interface';
import { RequestTokenResponse, SessionResponse } from '../models/interfaces/auth.interface';
import { List, ListResponse } from '../models/interfaces/list.interface';
import { MarkFavoriteResponse } from '../models/interfaces/mark-favorite.interface';
import { MoviesPopularResponse } from '../models/interfaces/movies-popular.interface';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getLocalSesionId(){
    return localStorage.getItem('session_id');
  }

  isLoggedIn(): boolean{
    return localStorage.getItem('session_id') != null;
  }

  setLocalSesionId(sessionId: string){
    localStorage.setItem('session_id', sessionId)
  }

  setLocalRequestToken(token: string) {
    localStorage.setItem('request_token', token)
  }

  getLocalRequestToken(){
    return localStorage.getItem('request_token');
  }

  getRequestToken(): Observable<RequestTokenResponse>{
    return this.http.get<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`);   
  }

  getSessionId(): Observable<SessionResponse> {
    return this.http.post<SessionResponse>(`https://api.themoviedb.org/3/authentication/session/new?api_key=${environment.apiKey}`, { request_token: this.getLocalRequestToken()});
  }

  getList(): Observable<ListResponse> {
    return this.http.get<ListResponse>(`https://api.themoviedb.org/3/account/null/lists?api_key=${environment.apiKey}&language=es&page=1&session_id=${this.getLocalSesionId()}`);
  }

  createdList(loginDto: ListLoginDto ): Observable<AuthLoginResponse> {
    return this.http.post<AuthLoginResponse>(`https://api.themoviedb.org/3/list?api_key=${environment.apiKey}&session_id=${this.getLocalSesionId()}`, loginDto, DEFAULT_HEADERS);
  }

  addMovieToList(first_id: number, addMovieDto: AddMovieDto ): Observable<MoviesPopularResponse>{
    return this.http.post<MoviesPopularResponse>(`https://api.themoviedb.org/3/list/${first_id}/add_item?api_key=${environment.apiKey}&session_id=${this.getLocalSesionId()}`, addMovieDto, DEFAULT_HEADERS )
  }

  addMovieToFavorite(markFavoriteDto: MarkFavoriteDto): Observable<MarkFavoriteResponse> {
    return this.http.post<MarkFavoriteResponse>(`https://api.themoviedb.org/3/account/null/favorite?api_key=${environment.apiKey}&session_id=${this.getLocalSesionId()}`, markFavoriteDto, DEFAULT_HEADERS)
  }
}
