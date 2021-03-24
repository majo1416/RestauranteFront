import { Component, OnInit } from '@angular/core';
import {ClientProductsService} from'../Service/client-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  productos : any;

  constructor(public client: ClientProductsService) { }
  pedirProductos(){
    this.client.getAllProducto('http://localhost:5000/api/v01/user/product').subscribe(
      (data): any =>  this.productos = data["datos"],
      error => console.log("Ha ocurrido un error en la llamada: ", error)
    )
  }

  ngOnInit(): void {
    this.pedirProductos()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      }
    };
    console.log(8787);

  }

}
