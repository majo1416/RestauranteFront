import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService} from '../Service/service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ServiceService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }
  async onSubmit() {
    if (this.form.valid) {
      let data = {
        email: this.form.value.email,
        password: this.form.value.password
      }
      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/login',data).subscribe(
        (response: any) => {
          console.log(response);

          Swal.fire('INICIO DE SESION CORRECTAMENTE').then((result) =>{
            if (result.isConfirmed) {
               //cambiando load a true, volvemos a ocultar el spinner
              this.load = true;
              this.route.navigate( ['/']);
              //console.log(response);
            }
          })
     },
      (error) => {
        this.load = true;
        console.log(error.status);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'INGRESO MAl UN DATO ,PUEDE SER LA CONTRASEÑA O EMAIL',
        })
      })
    } else {
      console.log("Form error");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'DATOS ICORRECTOS',

      })
    }








  }
}
