import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService} from '../Service/service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;
  constructor(  private fb: FormBuilder,
    private route: Router,
    private client: ServiceService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.email],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      tel: ['', Validators.required],
      direccion: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }
  async onSubmit() {


    if (this.form.valid) {

      let data = {
        email: this.form.value.email,
        name: this.form.value.name,
        lastname: this.form.value.lastname,
        tel: this.form.value.tel,
        direccion: this.form.value.direccion,
        fecha: this.form.value.fecha
      }
      console.log(data);
      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/register',data).subscribe(

        (response: any) => {
          //cambiando load a true, volvemos a ocultar el spinner
          this.load = true;
          Swal.fire({
            icon: 'success',
            title: 'Pedido exitoso',
            showConfirmButton: true,
            confirmButtonText: `Ok`
          }).then(() => {
            this.route.navigate( ['/pedidos'])
        })

      },
      (error) => {
        this.load = true;
        console.log(error.status);
        this.load = true;
        console.log(error.status);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'NO TENEMOS CONEXION EN EL SERVIDOR',
        })
      })


    } else {

      console.log("Form error");
    }
  }

}
