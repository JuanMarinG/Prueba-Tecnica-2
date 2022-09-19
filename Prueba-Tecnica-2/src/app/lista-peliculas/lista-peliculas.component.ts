import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  datos:any = null;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.retonar()
    .subscribe(result => this.datos=result)
  }

}
