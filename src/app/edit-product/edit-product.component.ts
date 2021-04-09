import { Component, OnInit } from '@angular/core';
import {ClientProductsService} from'../Service/client-products.service';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productos : any;
  infoProduct: any;
  nombreProducto: any;
  ulrImg : any;
  precio: any;
  load: boolean = true;
  constructor(
    private route: Router,
    private param : ActivatedRoute,
    public clientProduct: ClientProductsService
  ) { }

  ngOnInit(): void {
    this.param.paramMap
      .subscribe((params : ParamMap) => {
      let id = + params.get('id');
      this.infoProduct = id;
      console.log(this.infoProduct);
      this.getProduct(this.infoProduct)
    });
  }
  postActualizar(nombre: any,foto : any,precio:any){
    this.load = false;
    let data = {
      "id" : this.infoProduct,
      "nombre": nombre,
      "ulrImg":foto,
      "precio":precio
    }
    this.clientProduct.updateProducto('http://localhost:5000/api/v02/user/updateProduct',data).subscribe(
      (response): any =>{
      console.log(response)
      this.load = true;
      Swal.fire({
        icon: 'success',
        title: 'Actualizacion exitosa',
        showConfirmButton: true,
        confirmButtonText: `Ok`
      })
      this.route.navigate( ['/adminProduct'])
      }),
    (error) =>{
      console.log(error.status);
    }
  }
  getProduct(id:any){
    let data = {"id" : id}
   this.clientProduct.getAllProductoId('http://localhost:5000/api/v01/user/get',data).subscribe(
    (response) : any =>{
      this.productos = response["datos"]
      for (const info of this.productos) {
        this.nombreProducto = info.nombre;
        this.ulrImg = info.ulrImg;
        this.precio = info.precio;
        console.log(true);
      }
    }
   ),
   (error) => {
     console.log(error.status);
   }
  }

}
