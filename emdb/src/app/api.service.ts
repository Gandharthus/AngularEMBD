import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poke } from './tmdb';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseurl = 'https://pokeapi.co/api/v2'
  constructor(private http: HttpClient) {}
    getMovie(id : Number ): Observable<any>{
      return this.http.get<Poke>(`${this.baseurl}pokemon/${id}`);
    
}
}
