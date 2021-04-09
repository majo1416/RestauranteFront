import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService} from '../Service/service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AuthService } from '../../app/Service/auth.service';
@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;
  infoUser: any ;
  correo:any;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ServiceService,
    public auth : AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cel: ['', Validators.required],
      fecha: ['', Validators.required],
      persona: ['', Validators.required],

    });
    this.getInfo()

}
  async onSubmit() {



    if (this.form.valid) {

      let data = {
        cel: this.form.value.cel,
        fecha: this.form.value.fecha,
        persona: this.form.value.persona,
        idusuario:this.infoUser
      }
      console.log(data);
      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/reservar',data).subscribe(

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
  getInfo(){
    this.client.getRequest('http://localhost:5000/api/v01/user/getInfo',localStorage.getItem('token')
    ).subscribe(
      (data): any => {this.infoUser = data["datos"]
      for (const user of this.infoUser) {
          this.infoUser = user  ['correo']
      }
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
      this.auth.logout();
      this.route.navigate(['/login'])
    })
  }

}




