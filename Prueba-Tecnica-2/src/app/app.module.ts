import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaSeriesComponent } from './lista-series/lista-series.component';
import { DetalleSeriesComponent } from './detalle-series/detalle-series.component';
import { DetallePeliculasComponent } from './detalle-peliculas/detalle-peliculas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListaPeliculasComponent,
    ListaSeriesComponent,
    DetalleSeriesComponent,
    DetallePeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
