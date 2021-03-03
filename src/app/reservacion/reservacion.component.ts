import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService} from '../Service/service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ServiceService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      numero: ['', Validators.required],
      fecha: ['', Validators.required],
      name: ['', Validators.required],
    });
  }
  async onSubmit() {


    if (this.form.valid) {

      let data = {
        numero: this.form.value.numero,
        fecha: this.form.value.fecha,
        name: this.form.value.name,
      }
      console.log(data);
      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/register',data).subscribe(

        (response: any) => {
          //cambiando load a true, volvemos a ocultar el spinner
          this.load = true;
          Swal.fire({
            icon: 'success',
            title: 'Reservacion exitosa',
            showConfirmButton: true,
            confirmButtonText: `Ok`
          }).then(() => {
            this.route.navigate( ['/reservacion'])
        })
      },
      (error) => {
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'VERIFIQUE EL INGRESO DE DATOS'
      })
    }
  }

}
