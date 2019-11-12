import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './features/navegacion/navegacion.component';
import { CrearoperacionComponent } from './features/crearoperacion/crearoperacion.component';
import { OperacionesComponent } from './features/operaciones/operaciones.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavegacionComponent,
    CrearoperacionComponent,
    OperacionesComponent
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
