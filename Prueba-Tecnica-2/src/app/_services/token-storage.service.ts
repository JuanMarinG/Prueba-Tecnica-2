import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE = 'https://api.themoviedb.org/';
const headers = {
  headers: new HttpHeaders(
    { "authorization": "Bearer ae90c3bf26bbc28069a03d09e06bd844" })
};

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
}
