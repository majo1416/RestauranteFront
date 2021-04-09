import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrosComponent } from './registros/registros.component';
import { ResgistradoComponent } from './RegisOk/resgistrado/resgistrado.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { QuieneSomosComponent } from './quiene-somos/quiene-somos.component';
import { MostrarProductComponent } from './mostrar-product/mostrar-product.component';
import { LoginComponent } from './login/login.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { PedidosComponent } from './pedidos/pedidos.component';

import { DataTablesModule } from "angular-datatables";
import { AdminProductComponent } from './admin-product/admin-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent,
    ResgistradoComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProductosComponent,
    QuieneSomosComponent,
    MostrarProductComponent,
    LoginComponent,
    ReservacionComponent,
    PedidosComponent,
    AdminProductComponent,
    EditProductComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
