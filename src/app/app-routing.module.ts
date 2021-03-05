import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrosComponent} from './registros/registros.component'
import {ResgistradoComponent} from './RegisOk/resgistrado/resgistrado.component'
import {HomeComponent} from '../app/home/home.component';
import {MostrarProductComponent} from '../app/mostrar-product/mostrar-product.component';
import {QuieneSomosComponent} from '../app/quiene-somos/quiene-somos.component';

import {LoginComponent} from '../app/login/login.component';
import {PedidosComponent} from '../app/pedidos/pedidos.component';
import {ReservacionComponent} from './reservacion/reservacion.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'reservacion',component:ReservacionComponent},
  {path:'registrado',component:ResgistradoComponent},
  {path:'registrar',component:RegistrosComponent},
  {path:'productos',component:MostrarProductComponent},
  {path:'quienesomos',component:QuieneSomosComponent},
  {path:'pedidos',component:PedidosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
