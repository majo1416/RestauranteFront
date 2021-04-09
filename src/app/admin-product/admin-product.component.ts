import { Component, OnInit } from '@angular/core';
import {ClientProductsService} from'../Service/client-products.service';
import {ServiceService} from  '../Service/service.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router,ActivatedRoute,ParamMap } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { data } from 'jquery';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AuthService } from '../../app/Service/auth.service';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  mostrar = false;
  productos : any;
  info :any;
  form: FormGroup;
  botoncolombia:boolean=true;
  load: boolean = true;
  constructor(
    public clientProduct: ClientProductsService,
    private fb: FormBuilder,
    private route: Router,
    public client : ServiceService,
    public auth : AuthService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      url : ['',Validators.required]
    });
    this.pedirProductos();
    this.getInfo();
  }
  getInfo(){
    this.client.getRequest('http://localhost:5000/api/v01/user/getInfo',localStorage.getItem('token')
    ).subscribe(
      (data): any => {
        this.info = data["datos"]
        for (const iterator of this.info) {
          this.auth.setAdminUser(iterator['admin'])
          this.info = iterator['admin']
      }

    }
    ,
    (error) => {
      this.auth.logout();
      console.log("DEBEMOS INICIAR SESION");
      console.log(error);
      this.route.navigate(['/'])
    })
  }

  pedirProductos(){
    this.clientProduct.getAllProducto('http://localhost:5000/api/v01/user/product').subscribe(
      (data): any =>  this.productos = data["datos"]
      ,
      error => console.log("Ha ocurrido un error en la llamada: ", error)
    )
  }

  delente(id : any){
    this.load = false;
    let data = {"id" : id}
   this.clientProduct.getAllProductoId('http://localhost:5000/api/v02/user/deleteProduct',data).subscribe(
    (response) : any =>{
      Swal.fire({
        icon: 'success',
        title: 'Se elimino exitosa',
        showConfirmButton: true,
        confirmButtonText: `Ok`
      })
      this.pedirProductos()
      this.load=true;
    }
   ),
   (error) => {
     console.log(error.status);
   }
  }
  async onSubmit() {
    if (this.form.valid) {
      this.load = false;
      this.mostrar = false;
      this.clientProduct.postAddProduct('http://localhost:5000/api/v02/user/agregar',{
        nombre : this.form.value.nombre,
        precio : this.form.value.precio,
        urlImg : this.form.value.url
      }).subscribe(
        (response: any) => {
          this.load = true;
          console.log(response);
            //cambiando load a true, volvemos a ocultar el spinner
            this.load = true;
            Swal.fire({
              icon: 'success',
              title: 'Se agrego exitosa',
              showConfirmButton: true,
              confirmButtonText: `Ok`
            })
      }),

      (error) => {

        console.log(error.status);

      };
    } else {

      console.log("Form error");
    }


     }

}
