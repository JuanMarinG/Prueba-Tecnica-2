import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { peliculas } from '../models/peliculas.model';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  urlApi='https://api.themoviedb.org/3/movie/76341?api_key=ae90c3bf26bbc28069a03d09e06bd844';

  constructor(private http: HttpClient) { }

getAll(): Observable<peliculas[]> {
    return this.http.get<peliculas[]>(this.urlApi);
}

get(id : any): Observable<peliculas> {
    return this.http.get<peliculas>(`${this.urlApi}/${id}`);
}

create(data : any): Observable<any> {
    return this.http.post(this.urlApi, data);
}

update(id : any, data : any): Observable<any> {
    return this.http.put(`${this.urlApi}/${id}`, data);
}

delete(id : any): Observable<any> {
    return this.http.delete(`${this.urlApi}/${id}`);
}

deleteAll(): Observable<any> {
    return this.http.delete(this.urlApi);
}

findByName(name : any): Observable<peliculas[]> {
    return this.http.get<peliculas[]>(`${this.urlApi}?name=${name}`);
}
}
