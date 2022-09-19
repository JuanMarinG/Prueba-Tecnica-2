import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  retonar(){
    return this.http.get("");
  }


  funCharacter(id:any){
    return this.http.get(""+id);
  }
}
