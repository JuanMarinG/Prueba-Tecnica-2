import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  retonar(){
    return this.http.get("https://api.themoviedb.org/3/movie/76341?api_key=ae90c3bf26bbc28069a03d09e06bd844");
  }


  funPeliculas(id:any){
    return this.http.get("https://api.themoviedb.org/3/movie/76341?api_key=ae90c3bf26bbc28069a03d09e06bd844"+id);
  }
}
