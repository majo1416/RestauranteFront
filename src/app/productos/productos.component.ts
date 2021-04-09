import { Component, OnInit } from '@angular/core';
import {ClientProductsService} from'../Service/client-products.service';
import {ServiceService} from  '../Service/service.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../app/Service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { data } from 'jquery';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  mostrar = false;
  productos : any;
  info :any;
  form: FormGroup;

  botoncolombia:boolean=true;
  botonfrancia:boolean=false;

  constructor(
    public clientProduct: ClientProductsService,
    private fb: FormBuilder,
    private route: Router,
    public Client : ServiceService,
    public auth : AuthService
    ) { }
  pedirProductos(){
    this.clientProduct.getAllProducto('http://localhost:5000/api/v01/user/product').subscribe(
      (data): any =>  this.productos = data["datos"],
      error => console.log("Ha ocurrido un error en la llamada: ", error)
    )
  }

  getInfo(){
    this.Client.getRequest('http://localhost:5000/api/v01/user/getInfo',localStorage.getItem('token')
    ).subscribe(
      (data): any => {this.info = data["datos"]
      console.log(this.info);
    }
    ,
    (error) => {
      this.auth.logout();
      console.log("DEBEMOS INICIAR SESION");
      console.log(error);
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      cantidad: ['', Validators.required],
    });
    this.getInfo()
    this.pedirProductos()
    console.log(this.productos);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      }
    };
    console.log(8787);
  }
  onSubmit(id : any,nombre : any){
    if (this.form.valid) {
      let data = {
        cantidad: this.form.value.cantidad,
        producto: id,
        nombre : nombre
      }
      console.log(data);
    }
  }
  mostrarfrancia(){
    this.botoncolombia=false;
    this.botonfrancia=true;
    }

    mostrarcolombia(){
    this.botoncolombia=true;
    this.botonfrancia=false;
    }

}
