import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { ServiceService} from '../Service/service.service';
import {ClientProductsService} from'../Service/client-products.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;
  infoProduct: any;
  infoUser: any ;
  lado : string = "hola";
  productos : any;
  constructor(  private fb: FormBuilder,
    private route: Router,
    private param : ActivatedRoute,
    private client: ServiceService,
    public clientProduct: ClientProductsService
   ) { }


  getProduct(id:any){
    let data = {"id" : id}
   this.clientProduct.getAllProductoId('http://localhost:5000/api/v01/user/get',data).subscribe(
    (response) : any =>{
      this.productos = response["datos"]
      console.log(this.productos);
    }
   ),
   (error) => {
     console.log(error.status);
   }
  }
  getInfo(){
    this.client.getRequest('http://localhost:5000/api/v01/user/getInfo',localStorage.getItem('token')
    ).subscribe(
      (data): any => {this.infoUser = data["datos"]
    }
    ,
    (error) => {
      Swal.fire({
      title : 'Oops...',
      icon: 'error',
      text: '! Debes iniciar sesion !',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
      })
       this.route.navigate(['/login'])
    })
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      direccion: ['', Validators.required],
      numero: ['', Validators.required],
      fecha : ['',Validators.required],
      cantidad : ['',Validators.required]
    });

    this.param.paramMap
      .subscribe((params : ParamMap) => {
      let id = + params.get('id');
      this.infoProduct = id;
      console.log(this.infoProduct);
      this.getProduct(this.infoProduct)
    });
    this.getInfo()
    }
    async onSubmit() {
    if (this.form.valid) {
      try {
        for (const getInfo of this.infoUser) {
          this.infoUser = getInfo['correo'];
        }
        this.client.postRequest('http://localhost:5000/api/v01/user/pedido',{
          direccion: this.form.value.direccion,
          numeroSecundario: this.form.value.numero,
          fecha : this.form.value.fecha,
          cantidad : this.form.value.cantidad,
          comida : this.infoProduct,
          user : this.infoUser
        }).subscribe(
          (response: any) => {
            this.load = true;
          }),
          (error) => {
            console.log("ESTAMOS AQUI")
          };
      } catch (error) {
        console.log("NO INICIO SESION")
      }
    }else{
      console.log("ERROR FORM")
    }
    }

}
