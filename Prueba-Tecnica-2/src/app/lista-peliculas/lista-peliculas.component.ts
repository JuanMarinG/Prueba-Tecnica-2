import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  datos:any = null;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {

  }

  getFilm() {
    this.peliculasService.getAll().subscribe(
      response => {
        this.datos = response.results
        console.log(response.results)
      },
      error => {});
  }
}
