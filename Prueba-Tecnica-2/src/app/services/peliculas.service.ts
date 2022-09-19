import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { API_KEY } from '../constantes';

const url='https://api.themoviedb.org/3/';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(url+"movie/popular?api_key="+API_KEY);
  }

  getById(id: any): Observable<any> {
    return this.http.get(url+"movie/"+id+"?api_key="+API_KEY);
  }

}
