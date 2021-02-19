import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrosComponent} from './registros/registros.component'
import {ResgistradoComponent} from './RegisOk/resgistrado/resgistrado.component'
import {HomeComponent} from '../app/home/home.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registrado',component:ResgistradoComponent},
  {path:'registrar',component:RegistrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
