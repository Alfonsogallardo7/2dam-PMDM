import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person, PersonResponse } from '../models/interfaces/people.interface';
const apiUrl = `${environment.apiBase}`;
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<PersonResponse>{
    return this.http.get<PersonResponse>(`${apiUrl}/people`);
  }

  getPeopleId(id: String): Observable<Person>{
    return this.http.get<Person>(`${apiUrl}/people/${id}`);
  }
}


