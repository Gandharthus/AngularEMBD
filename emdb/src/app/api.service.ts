import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tmdb } from './tmdb';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseurl = 'https://api.themoviedb.org/3/'
  constructor() { }
}
