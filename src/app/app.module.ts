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
import { CompoServeComponent } from './compo-serve/compo-serve.component';

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
    CompoServeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
