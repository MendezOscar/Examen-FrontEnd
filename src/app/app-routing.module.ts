import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './features/inicio/inicio.component';
import { CrearoperacionComponent } from './features/crearoperacion/crearoperacion.component';
import { OperacionesComponent } from './features/operaciones/operaciones.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'calcular', component: CrearoperacionComponent},
  {path: 'operaciones', component: OperacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
