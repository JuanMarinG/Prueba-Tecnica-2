import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleSeriesComponent } from './detalle-series/detalle-series.component';
import { HomeComponent } from './home/home.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaSeriesComponent } from './lista-series/lista-series.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
}, {
    path: 'login',
    component: LoginComponent
},{
  path: 'peliculas',
  component: ListaPeliculasComponent
},{
  path: 'series',
  component: ListaSeriesComponent
},{
  path: 'detalle-peliculas/:id',
  component: ListaPeliculasComponent
},{
  path: 'detalle-series/:id',
  component: DetalleSeriesComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
