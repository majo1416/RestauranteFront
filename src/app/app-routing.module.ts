import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrosComponent} from './registros/registros.component'
import {ResgistradoComponent} from './RegisOk/resgistrado/resgistrado.component'
import {HomeComponent} from '../app/home/home.component';
import {ProductosComponent} from '../app/productos/productos.component';
import {QuieneSomosComponent} from '../app/quiene-somos/quiene-somos.component';
import {CompoServeComponent} from '../app/compo-serve/compo-serve.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registrado',component:ResgistradoComponent},
  {path:'registrar',component:RegistrosComponent},
  {path:'productos',component:ProductosComponent},
  {path:'quienesomos',component:QuieneSomosComponent},
  {path:'servicios',component:CompoServeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
