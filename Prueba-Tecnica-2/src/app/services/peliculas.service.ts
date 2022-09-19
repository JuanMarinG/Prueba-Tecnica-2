import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movies } from '../models/peliculas.model';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  urlApi='https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) { }

getAll(): Observable<movies[]> {
    return this.http.get<movies[]>(this.urlApi);
}

get(id : any): Observable<movies> {
    return this.http.get<movies>(`${this.urlApi}/${id}`);
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

findByName(name : any): Observable<movies[]> {
    return this.http.get<movies[]>(`${this.urlApi}?name=${name}`);
}
}
