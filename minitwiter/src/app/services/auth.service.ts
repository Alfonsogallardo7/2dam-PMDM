import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthRegisterDto } from '../models/dto/auth.dto';
import { Observable } from 'rxjs';
import { RegisterResponse } from '../models/interfaces/auth.interface';
import { environment } from 'src/environments/environment';

const AUTH_BASE_URL = 'auth';
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authBaseUrl = `${environment.apiBaseUrl}/${AUTH_BASE_URL}`;

  constructor(private http: HttpClient) { }

  register(registerDto: AuthRegisterDto): Observable<RegisterResponse> {
    let requestUrl = `${this.authBaseUrl}/signup`;
    return this.http.post<RegisterResponse>(requestUrl, registerDto, DEFAULT_HEADERS);
  }

  forgot() {
    let requestUrl = `${this.authBaseUrl}/forgot`;
  }


}
